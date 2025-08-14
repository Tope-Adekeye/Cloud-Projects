# 🔍 GCPBucketBrute - Google Cloud Storage Enumeration Tool

**"Advanced Google Cloud Storage bucket discovery and privilege analysis toolkit"**

[![GCP](https://img.shields.io/badge/Platform-Google%20Cloud%20Platform-blue.svg)](#)
[![Python](https://img.shields.io/badge/Language-Python%203-green.svg)](#)
[![Reconnaissance](https://img.shields.io/badge/Focus-Storage%20Reconnaissance-orange.svg)](#)
[![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)](LICENSE)

## 🎯 Overview

GCPBucketBrute is a **specialized Google Cloud Storage (GCS) reconnaissance tool** designed for comprehensive bucket enumeration, permission analysis, and privilege escalation assessment. This powerful Python-based toolkit enables security professionals to discover publicly accessible storage buckets, analyze IAM permissions, and identify potential security vulnerabilities in Google Cloud Storage configurations.

Built for **cloud security assessments and penetration testing**, GCPBucketBrute supports both authenticated and unauthenticated scanning modes, providing detailed insights into GCS bucket accessibility, permissions, and potential attack vectors across Google Cloud Platform environments.

## 🏗️ **Google Cloud Storage Assessment Capabilities**

### **🔍 Bucket Discovery & Enumeration**
- **Keyword-Based Generation**: Intelligent bucket name permutation based on target keywords
- **Wordlist Support**: Custom wordlist integration for targeted reconnaissance
- **Multi-Threading**: High-performance parallel bucket enumeration with configurable subprocess count
- **Comprehensive Coverage**: Systematic discovery of both public and private GCS buckets

### **🔐 Permission Analysis & Testing**
- **IAM Permission Testing**: Detailed analysis using Google Cloud TestIamPermissions API
- **Authenticated vs Unauthenticated**: Comparative permission analysis between access modes
- **Privilege Escalation Detection**: Identification of dangerous permissions (storage.buckets.setIamPolicy)
- **Access Level Classification**: Public readable, public writable, authenticated access categorization

### **�� Authentication & Access Modes**

#### **Service Account Authentication**
- **Private Key Integration**: Service account credential file authentication
- **API Access**: Full Google Cloud Storage API integration for detailed analysis
- **Cross-Account Testing**: Ability to test permissions across different GCP organizations
- **Credential Security**: Secure handling of service account authentication credentials

#### **User Account Authentication**
- **Access Token Support**: OAuth2 access token authentication for user accounts
- **Interactive Authentication**: Secure token input without command-line history exposure
- **Delegated Access**: Testing permissions under specific user contexts
- **Session Management**: Efficient token handling for extended enumeration sessions

#### **Unauthenticated Reconnaissance**
- **Anonymous Discovery**: Public bucket enumeration without authentication
- **Public Access Analysis**: Identification of publicly accessible storage resources
- **Attack Surface Mapping**: Discovery of exposed buckets and potential entry points
- **Stealth Reconnaissance**: Low-footprint enumeration for covert assessments

## 🔧 **Advanced Features & Techniques**

### **Intelligent Bucket Name Generation**
- **Permutation Algorithms**: Advanced keyword-based bucket name generation
- **Company-Specific Patterns**: Targeted enumeration based on organizational naming conventions
- **Common Patterns**: Integration of known GCS bucket naming patterns and conventions
- **Custom Wordlists**: Support for specialized wordlists and custom dictionaries

### **Privilege Escalation Assessment**
- **IAM Policy Manipulation**: Detection of buckets with setIamPolicy permissions
- **Privilege Boundary Analysis**: Identification of permission escalation vectors
- **Access Control Bypass**: Discovery of misconfigurations enabling unauthorized access
- **Risk Prioritization**: Severity-based ranking of discovered security vulnerabilities

### **Comprehensive Reporting**
- **Detailed Output**: Comprehensive permission analysis and access level documentation
- **File Export**: Results export to text files for analysis and reporting
- **Permission Matrices**: Clear documentation of authenticated vs unauthenticated access
- **Risk Assessment**: Security finding categorization and risk analysis

## 🚀 **Deployment & Usage**

### **Prerequisites**
- **Python 3.x**: Python 3.6 or higher with pip package manager
- **Google Cloud SDK**: Optional for enhanced authentication options
- **Network Access**: Internet connectivity for Google Cloud Storage API access
- **Credentials**: GCP service account or user account credentials (for authenticated scans)

### **Installation & Setup**
```bash
# Install Python dependencies
pip3 install -r requirements.txt

# Verify installation
python3 gcpbucketbrute.py --help
```

### **Basic Operations**
```bash
# Unauthenticated bucket enumeration
python3 gcpbucketbrute.py -k company-name -u

# Service account authenticated scan
python3 gcpbucketbrute.py -k target-keyword -f /path/to/service-account.json

# Custom wordlist enumeration
python3 gcpbucketbrute.py -w custom-wordlist.txt -f credentials.json

# High-performance scan with multiple subprocesses
python3 gcpbucketbrute.py -k target -s 10 -o results.txt
```

### **Advanced Reconnaissance**
```bash
# Comprehensive authenticated assessment
python3 gcpbucketbrute.py -k target-company -f sa-credentials.json -s 15 -o detailed-results.txt

# Specific bucket permission analysis
python3 gcpbucketbrute.py --check target-bucket-name -f credentials.json

# Bulk bucket permission testing
python3 gcpbucketbrute.py --check-list bucket-list.txt -f credentials.json

# Multi-keyword enumeration with custom wordlist
python3 gcpbucketbrute.py -w custom-targets.txt -f credentials.json -s 20
```

### **Permission Testing Examples**
```bash
# Test specific buckets for privilege escalation
python3 gcpbucketbrute.py --check production-data-bucket --check backup-storage

# Analyze bucket list from file
echo "company-backups" > targets.txt
echo "prod-data-store" >> targets.txt
python3 gcpbucketbrute.py --check-list targets.txt -f credentials.json

# Compare authenticated vs unauthenticated access
python3 gcpbucketbrute.py -k target-org -f credentials.json -o auth-comparison.txt
```

## 📊 **Security Assessment Applications**

### **Cloud Penetration Testing**
- **Storage Reconnaissance**: Comprehensive GCS bucket discovery and analysis
- **Permission Enumeration**: Detailed IAM permission testing and validation
- **Attack Vector Identification**: Discovery of potential storage-based attack paths
- **Data Exposure Assessment**: Identification of publicly accessible sensitive data

### **Cloud Security Auditing**
- **Compliance Validation**: Verification of proper GCS access controls and permissions
- **Misconfiguration Detection**: Identification of insecure bucket configurations
- **Privilege Analysis**: Assessment of excessive or dangerous storage permissions
- **Risk Assessment**: Comprehensive security posture evaluation

### **Red Team Operations**
- **Initial Reconnaissance**: Early-stage target organization storage discovery
- **Lateral Movement**: Discovery of accessible storage resources for further exploitation
- **Data Exfiltration**: Identification of buckets containing valuable information
- **Persistence Opportunities**: Discovery of writable buckets for payload storage

## 🎯 **Professional Applications**

This GCPBucketBrute tool demonstrates expertise in:
- **Google Cloud Platform Security** and GCS storage assessment
- **Cloud Reconnaissance Techniques** and systematic enumeration methodologies
- **IAM Permission Analysis** and privilege escalation identification
- **Python Security Automation** and scalable reconnaissance frameworks
- **Cloud Penetration Testing** and offensive security operations

---

## 📞 **Professional Contact**

**Tope Adekeye**  
🔗 **LinkedIn**: [linkedin.com/in/tope-adekeye](https://linkedin.com/in/tope-adekeye)  
💼 **GitHub**: [github.com/Tope-Adekeye](https://github.com/Tope-Adekeye)  
📧 **Email**: [adekeyetopeaiexpert@gmail.com](mailto:adekeyetopeaiexpert@gmail.com)

*Cloud Security Professional specializing in Google Cloud Platform Security, Storage Reconnaissance, and Cloud Penetration Testing*

---

## 🏆 **Technical Capabilities**

**GCP Services**: Cloud Storage • IAM • Service Accounts • API Access • Permission Management  
**Reconnaissance**: Bucket Enumeration • Permission Testing • Privilege Escalation • Access Analysis  
**Automation**: Python Scripting • Multi-Threading • API Integration • Wordlist Generation • Report Export
