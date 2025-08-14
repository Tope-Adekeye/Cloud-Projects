# ⚡ MicroBurst - Azure Penetration Testing Toolkit

**"Comprehensive PowerShell toolkit for Azure security assessment and penetration testing"**

[![Azure](https://img.shields.io/badge/Platform-Microsoft%20Azure-blue.svg)](#)
[![PowerShell](https://img.shields.io/badge/Language-PowerShell-darkblue.svg)](#)
[![PenTest](https://img.shields.io/badge/Focus-Penetration%20Testing-red.svg)](#)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](LICENSE)

## 🎯 Overview

MicroBurst is an **enterprise-grade Azure penetration testing toolkit** that provides comprehensive capabilities for Azure security assessments, red team operations, and cloud security research. This powerful PowerShell-based framework enables security professionals to perform thorough Azure environment reconnaissance, identify security weaknesses, and demonstrate potential attack paths in Microsoft Azure cloud environments.

Built specifically for offensive security operations, MicroBurst supports **Azure Services discovery, configuration auditing, credential extraction, and post-exploitation activities** across all major Azure service categories including compute, storage, networking, identity, and management services.

## 🏗️ **Azure Attack Surface Coverage**

### **☁️ Azure Service Categories**

#### **🔵 Azure Resource Manager (Az)**
- **Modern Azure API Integration**: Latest Azure PowerShell module compatibility
- **Service Discovery**: Comprehensive Azure resource enumeration and mapping
- **Credential Harvesting**: Key Vault secrets, Automation accounts, and service credentials
- **Virtual Machine Exploitation**: Bulk command execution and lateral movement
- **App Services Attacks**: Web application backdoors and command injection
- **Container Security**: Azure Container Registry token manipulation and exploitation

#### **🔷 Azure Active Directory (AzureAD)**
- **Domain Intelligence**: Azure AD tenant enumeration and organizational mapping
- **Identity Reconnaissance**: User enumeration, group membership analysis
- **Privilege Escalation**: Service principal abuse and role assignment exploitation
- **Authentication Bypass**: Managed identity token extraction and abuse

#### **🔹 Legacy Azure Resource Manager (AzureRM)**
- **Backward Compatibility**: Support for legacy Azure environments
- **Resource Enumeration**: Classic Azure service discovery and assessment
- **Credential Extraction**: Historical Azure account and automation credentials
- **Virtual Machine Operations**: Bulk command execution on legacy VMs

#### **🔸 REST API Operations**
- **Direct API Access**: Low-level Azure REST API manipulation and exploitation
- **Unauthenticated Attacks**: Anonymous Azure service enumeration
- **Key Vault Exploitation**: Direct API-based secret and key extraction
- **Privilege Escalation**: Elevated access toggle and administrative bypass techniques

## 🔧 **Penetration Testing Capabilities**

### **Reconnaissance & Discovery**
- **Domain Intelligence**: Azure tenant discovery and organizational profiling
- **Service Enumeration**: Comprehensive Azure resource discovery and mapping
- **Subdomain Discovery**: Azure-hosted subdomain enumeration and validation
- **Blob Storage Discovery**: Public and misconfigured storage account identification
- **Network Mapping**: Virtual network topology discovery and security group analysis

### **Credential Harvesting**
- **Azure Key Vault Exploitation**: Automated secret and certificate extraction
- **Automation Account Abuse**: RunAs certificate extraction and credential dumping
- **Managed Identity Token Theft**: Service identity token extraction and abuse
- **Virtual Machine Credential Extraction**: Password and certificate harvesting from VMs
- **App Services Token Manipulation**: Web application service token extraction

### **Lateral Movement & Persistence**
- **Virtual Machine Command Execution**: Bulk PowerShell execution across Azure VMs
- **App Services Backdoor Deployment**: Persistent web application backdoors
- **Automation Runbook Persistence**: Scheduled task persistence via Automation accounts
- **Desired State Configuration Abuse**: Infrastructure-level persistence mechanisms
- **Container Registry Manipulation**: Docker image and container exploitation

### **Privilege Escalation**
- **Azure RBAC Abuse**: Role-based access control privilege escalation
- **Managed Identity Exploitation**: Service identity privilege escalation
- **Automation Account Escalation**: Privileged automation account abuse
- **Key Vault Permission Escalation**: Cryptographic key and secret access escalation

## 🚀 **Deployment & Usage**

### **Prerequisites**
- **Windows PowerShell Environment**: PowerShell 5.1 or PowerShell Core 7+
- **Azure PowerShell Modules**: Az, AzureRM, AzureAD, MSOnline modules
- **Azure Access**: Valid Azure credentials or managed identity access
- **Execution Policy**: PowerShell execution policy allowing script execution

### **Installation & Setup**
```powershell
# Import the MicroBurst module
Import-Module .\MicroBurst.psm1

# Install required Azure PowerShell modules
Install-Module Az
Install-Module AzureAD
Install-Module MSOnline

# Trust downloaded files (if needed)
Get-ChildItem -Recurse .\microburst | Unblock-File
```

### **Basic Operations**
```powershell
# Azure domain reconnaissance
Get-AzDomainInfo -domain target-company.com

# Enumerate Azure services and subdomains
Invoke-EnumerateAzureSubDomains -base target-company

# Extract Azure Key Vault secrets
Get-AzKeyVaults-Automation

# Harvest Azure passwords and certificates
Get-AzPasswords

# Execute commands on Azure VMs
Invoke-AzVMBulkCMD -VM target-vm -Command "whoami"

# Extract managed identity tokens
# From Virtual Machine
Invoke-RestMethod -Uri "http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https://management.azure.com/" -Headers @{Metadata="true"}

# App Services exploitation
Invoke-AzAppServicesCMD -webApp target-app -Command "dir"
```

### **Advanced Attack Scenarios**
```powershell
# Comprehensive Azure assessment
Get-AzDomainInfo -domain target.com -Verbose
Get-AzAutomationAccountCredsREST
Get-AzKeyVaultSecretsREST

# Privilege escalation via managed identities
Invoke-AzElevatedAccessToggle
Get-AzMachineLearningCredentials

# Persistence via Automation accounts
# Deploy malicious runbook for persistence
Invoke-AzHybridWorkerExtraction

# Container and Kubernetes exploitation
Get-AzACR -subscriptionId <id>
Invoke-AzACRTokenGenerator
```

## 📊 **Attack Modules & Scripts**

### **Service-Specific Modules**
- **Key Vault Operations**: Secret extraction, certificate harvesting, automated access
- **Virtual Machine Attacks**: Bulk command execution, credential dumping, lateral movement
- **App Services Exploitation**: Command injection, debugging access, token extraction
- **Storage Account Attacks**: Blob enumeration, public access identification, data exfiltration
- **Automation Account Abuse**: Credential extraction, runbook deployment, scheduled persistence

### **Cross-Service Capabilities**
- **Managed Identity Exploitation**: Service identity token theft and privilege escalation
- **RBAC Abuse**: Role assignment manipulation and privilege escalation
- **Network Reconnaissance**: Virtual network mapping and security group analysis
- **Container Security**: Docker registry manipulation and Kubernetes exploitation

## 🎯 **Professional Applications**

This MicroBurst Azure penetration testing toolkit demonstrates expertise in:
- **Cloud Penetration Testing** and offensive security operations
- **Azure Security Architecture** and attack surface analysis
- **Red Team Operations** and advanced persistent threat simulation
- **Cloud Security Assessment** and vulnerability identification
- **DevSecOps Security Testing** and continuous security validation

---

## 📞 **Professional Contact**

**Tope Adekeye**  
🔗 **LinkedIn**: [linkedin.com/in/tope-adekeye](https://linkedin.com/in/tope-adekeye)  
💼 **GitHub**: [github.com/Tope-Adekeye](https://github.com/Tope-Adekeye)  
📧 **Email**: [adekeyetopeaiexpert@gmail.com](mailto:adekeyetopeaiexpert@gmail.com)

*Cloud Security Professional specializing in Azure Penetration Testing, Offensive Security, and Cloud Red Team Operations*

---

## 🏆 **Technical Capabilities**

**Azure Services**: Key Vault • Virtual Machines • App Services • Automation Accounts • Storage • AzureAD • Managed Identities  
**Attack Techniques**: Credential Harvesting • Lateral Movement • Privilege Escalation • Persistence • Reconnaissance  
**Tools**: PowerShell • Azure CLI • REST APIs • Container Security • Kubernetes • Network Analysis
