pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'your-dockerhub-username'
        IMAGE_NAME      = 'node-devops-app'
        IMAGE_TAG       = 'latest'
        CONTAINER_NAME  = 'node-app-local'
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
                bat "docker build -t %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Logging in and pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    bat "echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin"
                    bat "docker push %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying application container on host port 3000...'
                // Stop/remove existing container safely on Windows CMD
                bat "docker rm -f %CONTAINER_NAME% 2>nul || exit 0"
                bat "docker run -d -p 3000:8080 --name %CONTAINER_NAME% %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying container health status...'
                bat "docker ps | findstr %CONTAINER_NAME%"
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
