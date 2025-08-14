/**
 * Serverless Web Application - Frontend JavaScript
 * Demonstrates AWS Cognito, API Gateway, and Lambda integration
 */

class ServerlessApp {
    constructor() {
        this.apiGatewayUrl = 'https://api.example.com/dev'; // Replace with actual API Gateway URL
        this.cognitoUserPoolId = 'us-east-1_example'; // Replace with actual User Pool ID
        this.cognitoClientId = 'example-client-id'; // Replace with actual Client ID
        this.cognitoRegion = 'us-east-1';
        
        this.currentUser = null;
        this.accessToken = null;
        
        this.initializeApp();
    }

    initializeApp() {
        // Configure AWS SDK
        AWS.config.region = this.cognitoRegion;
        
        // Initialize Cognito
        this.initializeCognito();
        
        // Bind event listeners
        this.bindEventListeners();
        
        // Check if user is already authenticated
        this.checkAuthenticationStatus();
        
        console.log('🚀 Serverless Web Application Initialized');
    }

    initializeCognito() {
        // Configure Cognito User Pool
        this.userPool = new AWSCognito.CognitoUserPool({
            UserPoolId: this.cognitoUserPoolId,
            ClientId: this.cognitoClientId
        });
        
        console.log('🔐 Amazon Cognito configured');
    }

    bindEventListeners() {
        // Authentication buttons
        document.getElementById('login-btn').addEventListener('click', () => this.handleLogin());
        document.getElementById('register-btn').addEventListener('click', () => this.handleRegister());
        document.getElementById('logout-btn').addEventListener('click', () => this.handleLogout());
        
        // Data management buttons
        document.getElementById('add-item-btn').addEventListener('click', () => this.addItem());
        document.getElementById('refresh-items-btn').addEventListener('click', () => this.refreshItems());
        
        // API testing button
        document.getElementById('test-api-btn').addEventListener('click', () => this.testApiEndpoint());
        
        // Enter key support for forms
        document.getElementById('email').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });
        document.getElementById('password').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });
    }

    checkAuthenticationStatus() {
        const currentUser = this.userPool.getCurrentUser();
        
        if (currentUser) {
            currentUser.getSession((err, session) => {
                if (!err && session.isValid()) {
                    this.currentUser = currentUser;
                    this.accessToken = session.getAccessToken().getJwtToken();
                    this.showAuthenticatedView();
                } else {
                    this.showUnauthenticatedView();
                }
            });
        } else {
            this.showUnauthenticatedView();
        }
    }

    handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            this.showMessage('Please enter both email and password', 'error');
            return;
        }
        
        this.setLoadingState(true);
        
        const userData = {
            Username: email,
            Pool: this.userPool
        };
        
        const cognitoUser = new AWSCognito.CognitoUser(userData);
        
        const authenticationDetails = new AWSCognito.AuthenticationDetails({
            Username: email,
            Password: password
        });
        
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log('✅ Authentication successful');
                this.currentUser = cognitoUser;
                this.accessToken = result.getAccessToken().getJwtToken();
                this.showAuthenticatedView();
                this.setLoadingState(false);
                this.showMessage('Login successful!', 'success');
            },
            
            onFailure: (err) => {
                console.error('❌ Authentication failed:', err);
                this.setLoadingState(false);
                this.showMessage(`Login failed: ${err.message}`, 'error');
            }
        });
    }

    handleRegister() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            this.showMessage('Please enter both email and password', 'error');
            return;
        }
        
        this.setLoadingState(true);
        
        const attributeList = [
            new AWSCognito.CognitoUserAttribute({
                Name: 'email',
                Value: email
            })
        ];
        
        this.userPool.signUp(email, password, attributeList, null, (err, result) => {
            this.setLoadingState(false);
            
            if (err) {
                console.error('❌ Registration failed:', err);
                this.showMessage(`Registration failed: ${err.message}`, 'error');
                return;
            }
            
            console.log('✅ Registration successful');
            this.showMessage('Registration successful! Please check your email for verification.', 'success');
        });
    }

    handleLogout() {
        if (this.currentUser) {
            this.currentUser.signOut();
            this.currentUser = null;
            this.accessToken = null;
            this.showUnauthenticatedView();
            this.showMessage('Logged out successfully', 'success');
            console.log('👋 User logged out');
        }
    }

    showAuthenticatedView() {
        document.querySelector('.auth-section').style.display = 'none';
        document.getElementById('app-section').style.display = 'block';
        
        if (this.currentUser) {
            document.getElementById('user-email').textContent = this.currentUser.getUsername();
        }
        
        // Load initial data
        this.refreshItems();
    }

    showUnauthenticatedView() {
        document.querySelector('.auth-section').style.display = 'block';
        document.getElementById('app-section').style.display = 'none';
        
        // Clear form fields
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }

    async addItem() {
        const name = document.getElementById('item-name').value;
        const description = document.getElementById('item-description').value;
        
        if (!name || !description) {
            this.showMessage('Please enter both item name and description', 'error');
            return;
        }
        
        const itemData = {
            name: name,
            description: description,
            timestamp: new Date().toISOString(),
            userId: this.currentUser ? this.currentUser.getUsername() : 'anonymous'
        };
        
        try {
            this.setLoadingState(true);
            
            const response = await this.makeAPICall('POST', '/items', itemData);
            
            if (response.success) {
                console.log('✅ Item added successfully');
                this.showMessage('Item added successfully!', 'success');
                
                // Clear form fields
                document.getElementById('item-name').value = '';
                document.getElementById('item-description').value = '';
                
                // Refresh items list
                this.refreshItems();
            } else {
                throw new Error(response.message || 'Failed to add item');
            }
        } catch (error) {
            console.error('❌ Error adding item:', error);
            this.showMessage(`Error adding item: ${error.message}`, 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    async refreshItems() {
        try {
            this.setLoadingState(true);
            
            const response = await this.makeAPICall('GET', '/items');
            
            if (response.success && response.items) {
                this.displayItems(response.items);
                console.log('✅ Items refreshed successfully');
            } else {
                // Show demo data if API is not available
                this.displayDemoItems();
            }
        } catch (error) {
            console.error('❌ Error refreshing items:', error);
            this.displayDemoItems();
            this.showMessage('Using demo data (API not connected)', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    displayItems(items) {
        const itemsList = document.getElementById('items-display');
        itemsList.innerHTML = '';
        
        if (items.length === 0) {
            itemsList.innerHTML = '<li>No items found. Add some items to get started!</li>';
            return;
        }
        
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.description}</small>
                </div>
                <div>
                    <small>${new Date(item.timestamp).toLocaleString()}</small>
                </div>
            `;
            itemsList.appendChild(listItem);
        });
    }

    displayDemoItems() {
        const demoItems = [
            {
                name: "Demo Item 1",
                description: "This is a sample item from DynamoDB",
                timestamp: new Date().toISOString()
            },
            {
                name: "Demo Item 2", 
                description: "Another example of serverless data storage",
                timestamp: new Date(Date.now() - 3600000).toISOString()
            },
            {
                name: "Demo Item 3",
                description: "Demonstrates Lambda function integration",
                timestamp: new Date(Date.now() - 7200000).toISOString()
            }
        ];
        
        this.displayItems(demoItems);
    }

    async testApiEndpoint() {
        try {
            this.setLoadingState(true);
            
            const response = await this.makeAPICall('GET', '/health');
            
            document.getElementById('api-response').textContent = JSON.stringify({
                status: 'success',
                message: 'API Gateway and Lambda function working correctly',
                timestamp: new Date().toISOString(),
                response: response
            }, null, 2);
            
            console.log('✅ API test successful');
        } catch (error) {
            console.error('❌ API test failed:', error);
            
            // Show demo response
            document.getElementById('api-response').textContent = JSON.stringify({
                status: 'demo',
                message: 'This is a demo response (API Gateway not connected)',
                timestamp: new Date().toISOString(),
                lambda_function: 'serverless-demo-handler',
                aws_services: ['API Gateway', 'Lambda', 'DynamoDB', 'Cognito', 'S3']
            }, null, 2);
        } finally {
            this.setLoadingState(false);
        }
    }

    async makeAPICall(method, endpoint, data = null) {
        const url = `${this.apiGatewayUrl}${endpoint}`;
        
        const headers = {
            'Content-Type': 'application/json'
        };
        
        // Add authorization header if user is authenticated
        if (this.accessToken) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        
        const config = {
            method: method,
            headers: headers
        };
        
        if (data && (method === 'POST' || method === 'PUT')) {
            config.body = JSON.stringify(data);
        }
        
        const response = await fetch(url, config);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }

    setLoadingState(loading) {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.disabled = loading;
            if (loading) {
                button.classList.add('loading');
            } else {
                button.classList.remove('loading');
            }
        });
    }

    showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        // Insert message at the top of main content
        const mainContent = document.querySelector('.main-content');
        mainContent.insertBefore(messageDiv, mainContent.firstChild);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if AWS SDK is loaded
    if (typeof AWS === 'undefined') {
        console.warn('⚠️ AWS SDK not loaded. Some features may not work.');
    }
    
    // Initialize the serverless application
    window.serverlessApp = new ServerlessApp();
});

// Global error handler
window.addEventListener('error', (event) => {
    console.error('🚨 Global error:', event.error);
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('📱 Service Worker registered');
            })
            .catch((error) => {
                console.log('Service Worker registration failed');
            });
    });
}
