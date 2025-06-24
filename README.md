# ☁️ Cloud Security & DevOps Projects

A sandbox of **cloud-centric labs and automation patterns** spanning AWS and Azure.
Perfect for demonstrating IaC hygiene, automated guardrails, and attack-path testing.

| Folder | What it is | Key Skills |
|--------|------------|------------|
| **DetectionLab/** | All-in-one lab env with Splunk, ELK, Fleet | Log pipeline design • SOC analytics |
| **aws-waf-security-automations/** | AWS solution for turnkey WAF rules | CloudFormation • Threat mitigation |
| **guacamole-aws/** | Apache Guacamole bastion host on AWS | Zero-trust remote access • SSH/RDP proxy |

### Usage

```bash
# Example: spin up DetectionLab (Vagrant)
cd DetectionLab/Vagrant
vagrant up
