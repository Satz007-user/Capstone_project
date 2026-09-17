# Capstone_Project
End-to-End DevOps Pipeline for a Node.js Web Application
# DevOps Capstone: End-to-End Automated CI/CD Pipeline & Monitoring

## Project Description
This repository contains a containerized Node.js web application equipped with an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline and an integrated observability stack. The pipeline automates the entire software delivery lifecycle—from code checkout and Docker image building to private registry storage and remote deployment on AWS EC2—while Prometheus and Grafana provide real-time system monitoring.

---

## Tech Stack
* **Application Framework:** Node.js, Express.js
* **Version Control:** Git, GitHub
* **CI/CD Automation:** Jenkins (Windows host), GitHub Webhooks
* **Containerization & Registry:** Docker, Docker Hub (Private Repository)
* **Cloud Infrastructure:** AWS EC2 (Ubuntu 22.04 LTS)
* **Monitoring & Observability:** Prometheus, Grafana, Node Exporter

---

# CI/CD Pipeline & Deployment Workflow
The deployment workflow uses a declarative Jenkins pipeline triggered automatically via GitHub Webhooks on code pushes to the main branch:

* **Checkout Code:** Jenkins fetches the latest commit from the main branch of the GitHub repository.
* **Build Docker Image:** Jenkins builds the application container image using the project Dockerfile and tags it with both the build number (BUILD_NUMBER) and latest.
* **Push to Private Registry:** Jenkins authenticates with Docker Hub using stored credentials and pushes the newly tagged images to the private repository (`sathya10dock/node-devops-app`).
* **Deploy to AWS EC2:**
  * Jenkins establishes a secure SSH connection to the remote App EC2 instance (`18.61.163.127`) via SSH Agent.
  * Jenkins logs into Docker Hub directly on the EC2 host via `--password-stdin`.
  * Jenkins pulls the updated latest image from Docker Hub.
  * Any previously running container (`node-app`) is stopped and removed.
  * A new container is launched mapping port **8080** on the host to port **3000** inside the container.

# Observability & Monitoring Stack
The observability pipeline continuously monitors host performance and application health:

* **Deployed App Endpoint:** http://18.61.163.127:8080
* **Node Exporter Metrics:** Scraped on port 9100 by Prometheus to collect host OS metrics (CPU usage, memory utilization, disk I/O, network traffic).
* **Prometheus Server:** Scrapes metrics endpoints every 15 seconds and processes alerts.
* **Grafana Dashboard:** Configured on port 3000 to visualize real-time system metrics collected by Prometheus.
