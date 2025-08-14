/**
 * AWS Lambda Function - Serverless Web Application Backend
 * Handles API requests from API Gateway and interacts with DynamoDB
 */

const AWS = require('aws-sdk');

// Initialize AWS services
const dynamodb = new AWS.DynamoDB.DocumentClient();
const cognito = new AWS.CognitoIdentityServiceProvider();

// Configuration
const TABLE_NAME = process.env.DYNAMODB_TABLE || 'serverless-demo-items';
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
};

/**
 * Main Lambda handler function
 */
exports.handler = async (event) => {
    console.log('🚀 Lambda function invoked:', JSON.stringify(event, null, 2));
    
    try {
        // Handle CORS preflight requests
        if (event.httpMethod === 'OPTIONS') {
            return createResponse(200, { message: 'CORS preflight successful' });
        }
        
        // Extract request details
        const { httpMethod, path, pathParameters, queryStringParameters, body, headers } = event;
        const resource = pathParameters?.proxy || path?.replace('/dev/', '') || '';
        
        // Parse request body
        let requestBody = null;
        if (body) {
            try {
                requestBody = JSON.parse(body);
            } catch (e) {
                return createResponse(400, { error: 'Invalid JSON in request body' });
            }
        }
        
        // Verify authentication for protected routes
        const isProtectedRoute = !['health', 'ping'].includes(resource.split('/')[0]);
        let userId = null;
        
        if (isProtectedRoute) {
            const authResult = await verifyAuthToken(headers.Authorization || headers.authorization);
            if (!authResult.valid) {
                return createResponse(401, { error: 'Unauthorized' });
            }
            userId = authResult.userId;
        }
        
        // Route the request
        switch (true) {
            case httpMethod === 'GET' && resource === 'health':
                return await handleHealthCheck();
                
            case httpMethod === 'GET' && resource === 'items':
                return await handleGetItems(userId);
                
            case httpMethod === 'POST' && resource === 'items':
                return await handleCreateItem(requestBody, userId);
                
            case httpMethod === 'PUT' && resource.startsWith('items/'):
                const itemId = resource.split('/')[1];
                return await handleUpdateItem(itemId, requestBody, userId);
                
            case httpMethod === 'DELETE' && resource.startsWith('items/'):
                const deleteItemId = resource.split('/')[1];
                return await handleDeleteItem(deleteItemId, userId);
                
            case httpMethod === 'GET' && resource === 'user/profile':
                return await handleGetUserProfile(userId);
                
            default:
                return createResponse(404, { error: 'Route not found' });
        }
        
    } catch (error) {
        console.error('❌ Lambda function error:', error);
        return createResponse(500, { 
            error: 'Internal server error',
            message: error.message 
        });
    }
};

/**
 * Health check endpoint
 */
async function handleHealthCheck() {
    const response = {
        status: 'healthy',
        message: 'Serverless Web Application API is running',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        services: {
            lambda: 'operational',
            dynamodb: 'operational',
            cognito: 'operational'
        }
    };
    
    // Test DynamoDB connection
    try {
        await dynamodb.scan({
            TableName: TABLE_NAME,
            Limit: 1
        }).promise();
    } catch (error) {
        response.services.dynamodb = 'error';
        console.error('DynamoDB health check failed:', error);
    }
    
    return createResponse(200, response);
}

/**
 * Get all items for a user
 */
async function handleGetItems(userId) {
    try {
        const params = {
            TableName: TABLE_NAME,
            FilterExpression: 'userId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId
            }
        };
        
        const result = await dynamodb.scan(params).promise();
        
        return createResponse(200, {
            success: true,
            items: result.Items || [],
            count: result.Count
        });
        
    } catch (error) {
        console.error('Error fetching items:', error);
        return createResponse(500, {
            success: false,
            error: 'Failed to fetch items'
        });
    }
}

/**
 * Create a new item
 */
async function handleCreateItem(requestBody, userId) {
    try {
        if (!requestBody || !requestBody.name || !requestBody.description) {
            return createResponse(400, {
                success: false,
                error: 'Name and description are required'
            });
        }
        
        const itemId = generateUniqueId();
        const timestamp = new Date().toISOString();
        
        const item = {
            itemId: itemId,
            userId: userId,
            name: requestBody.name,
            description: requestBody.description,
            createdAt: timestamp,
            updatedAt: timestamp,
            status: 'active'
        };
        
        const params = {
            TableName: TABLE_NAME,
            Item: item
        };
        
        await dynamodb.put(params).promise();
        
        return createResponse(201, {
            success: true,
            message: 'Item created successfully',
            item: item
        });
        
    } catch (error) {
        console.error('Error creating item:', error);
        return createResponse(500, {
            success: false,
            error: 'Failed to create item'
        });
    }
}

/**
 * Update an existing item
 */
async function handleUpdateItem(itemId, requestBody, userId) {
    try {
        if (!requestBody || !requestBody.name || !requestBody.description) {
            return createResponse(400, {
                success: false,
                error: 'Name and description are required'
            });
        }
        
        const timestamp = new Date().toISOString();
        
        const params = {
            TableName: TABLE_NAME,
            Key: {
                itemId: itemId,
                userId: userId
            },
            UpdateExpression: 'SET #name = :name, description = :description, updatedAt = :updatedAt',
            ExpressionAttributeNames: {
                '#name': 'name'
            },
            ExpressionAttributeValues: {
                ':name': requestBody.name,
                ':description': requestBody.description,
                ':updatedAt': timestamp
            },
            ConditionExpression: 'attribute_exists(itemId)',
            ReturnValues: 'ALL_NEW'
        };
        
        const result = await dynamodb.update(params).promise();
        
        return createResponse(200, {
            success: true,
            message: 'Item updated successfully',
            item: result.Attributes
        });
        
    } catch (error) {
        if (error.code === 'ConditionalCheckFailedException') {
            return createResponse(404, {
                success: false,
                error: 'Item not found'
            });
        }
        
        console.error('Error updating item:', error);
        return createResponse(500, {
            success: false,
            error: 'Failed to update item'
        });
    }
}

/**
 * Delete an item
 */
async function handleDeleteItem(itemId, userId) {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                itemId: itemId,
                userId: userId
            },
            ConditionExpression: 'attribute_exists(itemId)',
            ReturnValues: 'ALL_OLD'
        };
        
        const result = await dynamodb.delete(params).promise();
        
        return createResponse(200, {
            success: true,
            message: 'Item deleted successfully',
            deletedItem: result.Attributes
        });
        
    } catch (error) {
        if (error.code === 'ConditionalCheckFailedException') {
            return createResponse(404, {
                success: false,
                error: 'Item not found'
            });
        }
        
        console.error('Error deleting item:', error);
        return createResponse(500, {
            success: false,
            error: 'Failed to delete item'
        });
    }
}

/**
 * Get user profile information
 */
async function handleGetUserProfile(userId) {
    try {
        // In a real application, you would fetch additional user data
        // from DynamoDB or other sources
        const profile = {
            userId: userId,
            email: userId, // In this demo, userId is the email
            profileCreated: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            preferences: {
                theme: 'light',
                notifications: true
            }
        };
        
        return createResponse(200, {
            success: true,
            profile: profile
        });
        
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return createResponse(500, {
            success: false,
            error: 'Failed to fetch user profile'
        });
    }
}

/**
 * Verify JWT token from Cognito
 */
async function verifyAuthToken(authorizationHeader) {
    try {
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return { valid: false, error: 'Missing or invalid authorization header' };
        }
        
        const token = authorizationHeader.substring(7); // Remove 'Bearer ' prefix
        
        // In a production application, you would verify the JWT token
        // against Cognito's public keys. For this demo, we'll do basic validation
        
        // Decode JWT payload (without verification for demo purposes)
        const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        
        // Check token expiration
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < currentTime) {
            return { valid: false, error: 'Token expired' };
        }
        
        // Extract user ID (email in this case)
        const userId = payload.email || payload.username || payload.sub;
        
        return { 
            valid: true, 
            userId: userId,
            payload: payload
        };
        
    } catch (error) {
        console.error('Token verification error:', error);
        return { valid: false, error: 'Invalid token' };
    }
}

/**
 * Create standardized API response
 */
function createResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: CORS_HEADERS,
        body: JSON.stringify(body)
    };
}

/**
 * Generate unique ID for items
 */
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Environment configuration validation
 */
function validateEnvironment() {
    const requiredEnvVars = ['DYNAMODB_TABLE'];
    const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
    
    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

// Validate environment on module load
try {
    validateEnvironment();
} catch (error) {
    console.warn('⚠️ Environment validation warning:', error.message);
}
