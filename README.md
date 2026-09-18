# 🚀 Node.js DevOps Capstone Project

An end-to-end automated CI/CD pipeline and infrastructure monitoring setup for a Node.js web application deployed on AWS EC2, containerized with Docker, automated via Jenkins, and monitored with Prometheus and Grafana.

---

## 🏗️ Architecture & Tech Stack

* **Application Runtime:** Node.js (v18-alpine)
* **Containerization:** Docker & Docker Hub (`sathya10dock/node-devops-app`)
* **CI/CD Orchestration:** Jenkins (Declarative Pipeline)
* **Version Control:** Git & GitHub
* **Cloud Infrastructure:** AWS EC2 Instances
* **Monitoring & Visualization:** Prometheus & Grafana
* **Automation:** Linux Shell Scripts & Cron Jobs

---

## 📂 Project Structure

```text
Capstone_project/
├── app.js                  # Main Node.js application server
├── package.json            # Node.js dependencies and metadata
├── Dockerfile              # Docker image build instructions
├── Jenkinsfile             # Declarative CI/CD pipeline definition
└── README.md               # Project documentation
