# 🚀 Node.js DevOps Capstone Project

An end-to-end automated CI/CD pipeline and infrastructure monitoring setup for a Node.js web application deployed on AWS EC2, containerized with Docker, automated via Jenkins, and monitored with Prometheus and Grafana.

## 🏗️ Architecture & Tech Stack

* **Application Runtime:** Node.js (v18-alpine)

* **Containerization:** Docker & Docker Hub (`sathya10dock/node-devops-app`)

* **CI/CD Orchestration:** Jenkins (Declarative Pipeline)

* **Version Control:** Git & GitHub

* **Cloud Infrastructure:** AWS EC2 Instances

* **Monitoring & Visualization:** Prometheus & Grafana

* **Automation:** Linux Shell Scripts & Cron Jobs

## 📂 Project Structure

```
Capstone_project/
├── app.js                  # Main Node.js application server
├── package.json            # Node.js dependencies and metadata
├── Dockerfile              # Docker image build instructions
├── Jenkinsfile             # Declarative CI/CD pipeline definition
└── README.md               # Project documentation

```

## 🔄 CI/CD Pipeline & Workflow

The automated Jenkins pipeline (Jenkinsfile) seamlessly coordinates building, testing, and deployment.

### CI/CD Flow Explained

1. **Code Push (Source Control):** Changes are committed and pushed by the developer to the GitHub repository.

2. **Automated Trigger (CI):** GitHub notifies Jenkins, automatically triggering the Jenkinsfile pipeline execution.

3. **Checkout & Build:** Jenkins clones the latest source code and executes a Docker build, packaging the Node.js application into a production-ready container image.

4. **Push to Registry:** Utilizing secure Jenkins credentials, the pipeline logs into Docker Hub and pushes the newly built image (latest).

5. **Automated Deployment (CD):** Jenkins connects to the target AWS EC2 instance, safely removes any legacy container instance (`docker rm -f`), pulls the fresh image, and starts a brand-new container mapped to ports 8081 (host) and 8080 (container).

6. **Verification:** The pipeline executes validation steps to ensure the container is healthy and the service is live.

## 📊 Infrastructure Monitoring

The project uses a dual-instance architecture:

* **Application Instance (`40.192.70.160`):** Runs the Node.js Docker container and **Node Exporter** (port `9100`) for system metrics collection.

* **Monitoring Instance (`18.60.111.217`):** Hosts **Prometheus** (port `9090`) and **Grafana** (port `3000`).

## 🤖 Automated Maintenance (Cron Jobs)

Server backups and cleanup routines are automated via Cron:

* **Daily App Backup:** Compresses project files into a tarball every day at 2:00 AM.

* **Weekly Log Cleanup:** Prunes old logs and runs `docker system prune` to optimize disk space every Sunday at 3:00 AM.
