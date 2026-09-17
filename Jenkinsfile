pipeline {
    agent any

    environment {
        // Replace with your actual Docker Hub username and repository name
        DOCKER_HUB_USER = 'your-dockerhub-username'
        IMAGE_NAME      = 'node-devops-app'
        IMAGE_TAG       = 'latest'
        CONTAINER_NAME  = 'node-app-local'
        // Jenkins Credentials ID created for Docker Hub login
        DOCKER_CREDS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Logging in and pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin"
                    sh "docker push ${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying application container on host port 3000...'
                // Stop and remove existing container if it exists
                sh "docker rm -f ${CONTAINER_NAME} || true"
                // Run container mapped to host port 3000
                sh "docker run -d -p 3000:8080 --name ${CONTAINER_NAME} ${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying container health status...'
                sh "docker ps | grep ${CONTAINER_NAME}"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Application is live on port 3000.'
        }
        failure {
            echo 'Pipeline failed. Please check the stage logs above.'
        }
    }
}
