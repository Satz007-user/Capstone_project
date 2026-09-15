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

## Local Setup Instructions

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### 1. Clone the Repository
```bash
git clone [https://github.com/Satz007-user/Capstone_project.git](https://github.com/Satz007-user/Capstone_project.git)
cd Capstone_project
