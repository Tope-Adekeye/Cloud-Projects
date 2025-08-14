# ☁️ Cloud Security & DevOps Projects

A sandbox of **cloud-centric labs and automation patterns** spanning AWS and Azure.
Perfect for demonstrating IaC hygiene, automated guardrails, and attack-path testing.

| Folder | What it is | Key Skills |
|--------|------------|------------|
| **[DetectionLab/](DetectionLab/)** | **Multi-cloud SOC analytics lab with pre-configured security tooling** | **Enterprise SOC operations • SIEM/Splunk • Threat hunting • Multi-cloud IaC** |
| **[aws-waf-security-automations/](aws-waf-security-automations/)** | **Automated web application firewall with intelligent threat detection** | **AWS WAF • DDoS mitigation • Bot detection • CloudFormation/CDK • OWASP protection** |
| **[guacamole-aws/](guacamole-aws/)** | **Clientless remote desktop gateway with zero-trust security architecture** | **Zero-trust access • Terraform IaC • RDP/SSH/VNC • Secure bastion • AWS networking** |
| **[cloudsploit/](cloudsploit/)** | **Multi-cloud security misconfiguration scanner with compliance frameworks** | **Security assessment • AWS/Azure/GCP/Oracle • PCI/HIPAA/CIS • Risk analysis • Automation** |
| **[microburst/](microburst/)** | **Azure penetration testing toolkit with offensive security capabilities** | **Azure pentesting • PowerShell • Credential harvesting • Red team • Privilege escalation** |

### Usage

```bash
# Example: spin up DetectionLab (Vagrant)
cd DetectionLab/Vagrant
vagrant up
