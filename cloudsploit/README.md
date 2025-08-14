# ☁️ CloudSploit - Multi-Cloud Security Misconfiguration Scanner

**"Comprehensive cloud security assessment platform for AWS, Azure, GCP, Oracle, and GitHub"**

[![Multi-Cloud](https://img.shields.io/badge/Platform-AWS%20%7C%20Azure%20%7C%20GCP%20%7C%20Oracle-blue.svg)](#)
[![Security](https://img.shields.io/badge/Focus-Security%20Assessment-red.svg)](#)
[![Compliance](https://img.shields.io/badge/Standards-PCI%20%7C%20HIPAA%20%7C%20CIS-green.svg)](#)
[![License](https://img.shields.io/badge/License-GPL%203.0-orange.svg)](LICENSE)

## 🎯 Overview

CloudSploit is an **enterprise-grade multi-cloud security scanner** that performs comprehensive security assessments across major cloud platforms. This powerful tool identifies misconfigurations, compliance violations, and security risks in cloud infrastructure through automated scanning and detailed reporting.

Built with extensive plugin architecture, CloudSploit provides **real-time security posture assessment** for Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud Infrastructure (OCI), and GitHub repositories, enabling organizations to maintain robust cloud security across hybrid and multi-cloud environments.

## 🏗️ **Multi-Cloud Architecture**

### **☁️ Supported Cloud Platforms**

#### **🔶 Amazon Web Services (AWS)**
- **200+ Security Plugins**: Comprehensive coverage across all AWS services
- **IAM Assessment**: Access policies, roles, and privilege escalation detection
- **Network Security**: VPC, security groups, NACLs, and endpoint configurations
- **Data Protection**: S3, RDS, DynamoDB encryption and access controls
- **Compliance Frameworks**: PCI DSS, HIPAA, SOC 2, CIS Benchmarks

#### **🔷 Microsoft Azure**
- **150+ Security Plugins**: Azure-specific security assessments
- **Identity Management**: Azure AD, RBAC, and conditional access policies
- **Network Security**: NSGs, virtual networks, and firewall configurations
- **Data Security**: Storage accounts, SQL databases, and key vault assessments
- **Resource Management**: Subscription-level security and governance

#### **🔴 Google Cloud Platform (GCP)**
- **100+ Security Plugins**: GCP service security evaluations
- **IAM & Security**: Service accounts, IAM policies, and organization policies
- **Compute Security**: VM instances, Kubernetes clusters, and App Engine
- **Data Protection**: Cloud Storage, BigQuery, and Cloud SQL security
- **Network Security**: VPC, firewall rules, and load balancer configurations

#### **🟠 Oracle Cloud Infrastructure (OCI)**
- **50+ Security Plugins**: OCI-specific security assessments
- **Identity Management**: OCI IAM, compartments, and policies
- **Network Security**: VCNs, security lists, and route tables
- **Compute Security**: Instance configurations and boot volume encryption
- **Database Security**: Autonomous databases and traditional DB instances

#### **⚫ GitHub Enterprise**
- **Repository Security**: Branch protection, secret scanning, dependency analysis
- **Organization Management**: Access controls, team permissions, security policies
- **Code Security**: Security advisories, vulnerability alerts, code scanning
- **Compliance**: Enterprise security settings and audit log monitoring

## 🔧 **Security Assessment Capabilities**

### **Configuration Analysis**
- **Resource Inventory**: Comprehensive cloud asset discovery and classification
- **Security Baseline**: Deviation detection from security best practices
- **Compliance Mapping**: Automatic compliance framework alignment
- **Risk Prioritization**: Severity-based findings with remediation guidance

### **Identity & Access Management**
- **Privilege Analysis**: Excessive permissions and unused access detection
- **Policy Validation**: IAM policies, resource-based policies, and cross-account access
- **Service Account Security**: Service account permissions and key management
- **Multi-Factor Authentication**: MFA configuration and enforcement analysis

### **Network Security Assessment**
- **Network Segmentation**: VPC/VNet configuration and isolation analysis
- **Firewall Rules**: Security group, NSG, and firewall rule validation
- **Public Exposure**: Publicly accessible resources and unintended exposure
- **Network Monitoring**: Flow logs, network monitoring, and traffic analysis

### **Data Protection Evaluation**
- **Encryption Analysis**: Data at rest and in transit encryption validation
- **Access Controls**: Data access policies and public accessibility assessment
- **Backup Security**: Backup encryption, retention, and recovery procedures
- **Data Classification**: Sensitive data identification and protection measures

## 🚀 **Deployment & Usage**

### **Prerequisites**
- **Node.js** 14.x or higher
- **Cloud Provider Access**: Configured credentials for target cloud platforms
- **API Permissions**: Read-only access to cloud resources for assessment

### **Quick Start**
```bash
# Install dependencies
npm install

# Configure cloud credentials (example for AWS)
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key

# Run comprehensive scan
./index.js --cloud=aws

# Run compliance-specific scan
./index.js --cloud=aws --compliance=pci

# Multi-cloud assessment
./index.js --cloud=aws,azure,gcp
```

### **Docker Deployment**
```bash
# Build container
docker build . -t cloudsploit:latest

# Run scan with environment variables
docker run -e AWS_ACCESS_KEY_ID=XX \
           -e AWS_SECRET_ACCESS_KEY=YY \
           cloudsploit:latest --compliance=hipaa

# Mount config file
docker run -v $(pwd)/config.js:/app/config.js \
           cloudsploit:latest --config=/app/config.js
```

## 📊 **Compliance & Standards**

### **Regulatory Frameworks**
- **PCI DSS**: Payment card industry data security standard
- **HIPAA**: Health insurance portability and accountability act
- **SOC 2**: Service organization control 2 compliance
- **CIS Benchmarks**: Center for internet security best practices
- **NIST**: National institute of standards and technology frameworks

### **Industry Standards**
- **ISO 27001**: Information security management systems
- **GDPR**: General data protection regulation compliance
- **FedRAMP**: Federal risk and authorization management program
- **Cloud Security Alliance**: CSA cloud controls matrix

## 🔍 **Advanced Features**

### **Custom Plugin Development**
```javascript
// Example security plugin structure
module.exports = {
    title: 'S3 Bucket Public Access',
    category: 'S3',
    description: 'Ensures S3 buckets are not publicly accessible',
    run: function(cache, settings, callback) {
        // Plugin logic implementation
    }
};
```

### **Output Formats**
- **Console**: Real-time colored output with severity indicators
- **JSON**: Structured data for programmatic processing
- **CSV**: Spreadsheet-compatible format for reporting
- **JUnit XML**: CI/CD integration and automated testing
- **Custom Formats**: Extensible output processing framework

### **Result Processing**
- **Suppressions**: Rule-based false positive filtering
- **Severity Scoring**: Risk-based prioritization system
- **Trend Analysis**: Historical security posture tracking
- **Integration APIs**: SIEM, ticketing, and notification systems

## 🎯 **Professional Applications**

This CloudSploit security scanner demonstrates expertise in:
- **Multi-Cloud Security Architecture** and comprehensive risk assessment
- **Compliance Management** and regulatory framework implementation
- **Security Automation** and continuous security monitoring
- **DevSecOps Integration** and security-as-code practices
- **Enterprise Security Governance** and cloud security posture management

---

## 📞 **Professional Contact**

**Tope Adekeye**  
🔗 **LinkedIn**: [linkedin.com/in/tope-adekeye](https://linkedin.com/in/tope-adekeye)  
💼 **GitHub**: [github.com/Tope-Adekeye](https://github.com/Tope-Adekeye)  
📧 **Email**: [adekeyetopeaiexpert@gmail.com](mailto:adekeyetopeaiexpert@gmail.com)

*Cloud Security Professional specializing in Multi-Cloud Security Assessment, Compliance Management, and Security Automation*

---

## 🏆 **Technical Capabilities**

**Cloud Platforms**: AWS • Azure • GCP • Oracle Cloud • GitHub Enterprise  
**Security Domains**: IAM • Network Security • Data Protection • Compliance • Misconfiguration Detection  
**Integration**: Docker • CI/CD • APIs • SIEM • Custom Plugin Development • Security Automation
