# 🔬 DetectionLab - Comprehensive SOC Analytics Lab Environment

**"Multi-cloud SOC lab with pre-configured security tooling and enterprise monitoring"**

[![Platform](https://img.shields.io/badge/Platform-AWS%20%7C%20Azure%20%7C%20Local-blue.svg)](#)
[![SOC](https://img.shields.io/badge/Focus-SOC%20Analytics-green.svg)](#)
[![Infrastructure](https://img.shields.io/badge/IaC-Terraform%20%7C%20Vagrant-orange.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)

## 🎯 Overview

DetectionLab is a **comprehensive SOC analytics laboratory environment** designed for hands-on security operations training, threat detection development, and enterprise monitoring simulation. This multi-cloud platform provides security professionals with a realistic Windows domain environment pre-loaded with industry-standard security tooling and best-practice logging configurations.

Originally developed by Chris Long, this lab environment has been optimized to demonstrate **enterprise-grade SOC capabilities** across multiple deployment platforms including AWS, Azure, ESXi, Hyper-V, and local virtualization.

## 🏗️ **Architecture & Deployment Options**

### **☁️ Cloud Deployments**
- **[AWS via Terraform](AWS/)** - Scalable cloud deployment with automatic provisioning
- **[Azure via Terraform & Ansible](Azure/)** - Hybrid automation with infrastructure and configuration management
- **[ESXi via Terraform & Ansible](ESXi/)** - Enterprise virtualization platform deployment

### **🖥️ Local Deployments**
- **[Vagrant (VirtualBox/VMware)](Vagrant/)** - Local development and testing environment
- **[Hyper-V](HyperV/)** - Windows-native virtualization deployment
- **[Proxmox](Proxmox/)** - Open-source virtualization platform

### **📦 Image Building**
- **[Packer Configurations](Packer/)** - Automated VM image creation for multiple platforms

## 🛡️ **Pre-Configured Security Stack**

### **SIEM & Analytics**
- **Splunk Enterprise** with pre-configured indexes and technology add-ons
- **Custom Windows Event Forwarding** subscriptions (Palantir WEF)
- **Fleet osquery Management** with enterprise configuration
- **Comprehensive logging** via GPO and PowerShell transcript logging

### **Threat Detection & Monitoring**
- **Microsoft Advanced Threat Analytics (ATA)** with lightweight gateway
- **Sysmon** with Olaf Hartong's modular configuration
- **Zeek & Suricata** for network monitoring and alerting
- **AutorunsToWinEventLog** for persistence monitoring

### **Enterprise Features**
- **Windows Domain Controller** with realistic Active Directory structure
- **Windows Event Forwarding** with custom channels and subscriptions
- **Command-line process auditing** via advanced GPO configuration
- **Apache Guacamole** for secure remote access management

## 🚀 **Quick Start**

### **Prerequisites**
- **Virtualization Platform**: VirtualBox, VMware, Hyper-V, or cloud account
- **Infrastructure Tools**: Vagrant, Terraform, or Ansible (depending on deployment)
- **System Requirements**: 16GB+ RAM, 100GB+ storage recommended

### **Local Deployment (Vagrant)**
```bash
# Clone and prepare environment
cd DetectionLab/Vagrant
vagrant up

# Access via browser
# Splunk: https://192.168.56.105:8000
# Fleet: https://192.168.56.105:8412
```

### **AWS Deployment**
```bash
cd DetectionLab/AWS/Terraform
terraform init
terraform plan
terraform apply
```

### **Azure Deployment**
```bash
cd DetectionLab/Azure/Terraform
terraform init && terraform apply
cd ../Ansible
ansible-playbook detectionlab.yml
```

## 📊 **Use Cases & Training Scenarios**

### **SOC Analyst Training**
- **Log Analysis**: Hands-on experience with Splunk enterprise environment
- **Threat Hunting**: Pre-configured osquery and Sysmon for endpoint investigation
- **Incident Response**: Realistic Windows domain for IR simulation
- **Network Security Monitoring**: Zeek and Suricata for traffic analysis

### **Red Team Exercises**
- **Attack Simulation**: Vulnerable domain environment for penetration testing
- **Detection Bypass**: Test evasion techniques against enterprise monitoring
- **Lateral Movement**: Realistic network topology for advanced tactics
- **Persistence Testing**: Monitor detection of various persistence mechanisms

### **Blue Team Development**
- **Detection Engineering**: Develop and test custom SIEM rules
- **Hunt Development**: Create and validate threat hunting queries
- **Tool Integration**: Test security tool integrations and workflows
- **Monitoring Optimization**: Fine-tune enterprise logging configurations

## 🔧 **Lab Components**

| Component | Purpose | Key Features |
|-----------|---------|-------------|
| **Domain Controller** | Windows AD environment | GPO, DNS, DHCP, Certificate Services |
| **Windows Workstation** | User endpoint simulation | Windows 10 with security agents |
| **Log Server (WEF)** | Centralized log collection | Windows Event Forwarding, ATA |
| **Linux Logger** | SIEM and monitoring | Splunk, Fleet, Zeek, Suricata |

## 📚 **Documentation & Resources**

### **Official Documentation**
- **Primary Documentation**: [detectionlab.network](https://detectionlab.network)
- **Lab Credentials**: Default vagrant credentials (change for production use)
- **Troubleshooting**: Common issues and solutions included

### **Media Coverage**
- **Paul's Security Weekly #593** - DetectionLab overview and demonstration
- **TaoSecurity Blog** - Independent security expert review
- **SANS ISC Diary** - Defensive visibility and introspection analysis

## ⚠️ **Security Notice**

**IMPORTANT**: This lab environment is **deliberately insecure** and designed for training purposes only. It uses default credentials and is not hardened for production use. **Never connect this lab to production networks or systems you care about.**

## 🎯 **Professional Applications**

This DetectionLab environment demonstrates expertise in:
- **Enterprise SOC Operations** and security monitoring architecture
- **Multi-cloud Infrastructure as Code** deployment and management
- **Security Tool Integration** and enterprise logging configuration
- **Threat Detection Engineering** and hunt development capabilities
- **Incident Response Training** and realistic attack simulation

---

## 📞 **Professional Contact**

**Tope Adekeye**  
🔗 **LinkedIn**: [linkedin.com/in/tope-adekeye](https://linkedin.com/in/tope-adekeye)  
💼 **GitHub**: [github.com/Tope-Adekeye](https://github.com/Tope-Adekeye)  
📧 **Email**: [adekeyetopeaiexpert@gmail.com](mailto:adekeyetopeaiexpert@gmail.com)

*Cybersecurity Professional specializing in SOC Operations, Cloud Security, and Detection Engineering*

---

## 🏆 **Key Technologies**

**Security Stack**: Microsoft ATA • Splunk • osquery • Fleet • Sysmon • Zeek • Suricata • Windows Event Forwarding  
**Infrastructure**: Terraform • Ansible • Vagrant • Multi-cloud deployment • Enterprise virtualization platforms
