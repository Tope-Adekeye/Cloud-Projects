# ☁️ Cloud Security & DevOps Projects

A sandbox of **cloud-centric labs and automation patterns** spanning AWS and Azure.
Perfect for demonstrating IaC hygiene, automated guardrails, and attack-path testing.

| Folder | What it is | Key Skills |
|--------|------------|------------|
| **[DetectionLab/](DetectionLab/)** | **Multi-cloud SOC analytics lab with pre-configured security tooling** | **Enterprise SOC operations • SIEM/Splunk • Threat hunting • Multi-cloud IaC** |
| **[aws-waf-security-automations/](aws-waf-security-automations/)** | **Automated web application firewall with intelligent threat detection** | **AWS WAF • DDoS mitigation • Bot detection • CloudFormation/CDK • OWASP protection** |
| **guacamole-aws/** | Apache Guacamole bastion host on AWS | Zero-trust remote access • SSH/RDP proxy |

### Usage

```bash
# Example: spin up DetectionLab (Vagrant)
cd DetectionLab/Vagrant
vagrant up
