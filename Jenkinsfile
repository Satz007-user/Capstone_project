pipeline {
    agent any
    environment {
        IMAGE_NAME = 'sathya10dock/node-devops-app'
        APP_EC2_IP = '18.61.163.127'
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
                bat "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest"
            }
        }
        stage('Push Image to Docker Hub') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-token', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            bat "docker login -u %DOCKER_USER% -p %DOCKER_PASS%"
            bat "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
            bat "docker push ${IMAGE_NAME}:latest"
        }
    }
}
                }
            }
        }
        stage('Deploy to App EC2') {
            steps {
                sshagent(['app-ec2-ssh-key']) {
                    bat """
                        ssh -o StrictHostKeyChecking=no ubuntu@${APP_EC2_IP} "docker pull ${IMAGE_NAME}:latest && docker stop node-app || true && docker rm node-app || true && docker run -d --name node-app -p 3000:3000 ${IMAGE_NAME}:latest"
                    """
                }
            }
        }
    }
}
