pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-token'
        IMAGE_NAME = 'sathya10dock/node-devops-app'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'node-app-local'
        HOST_PORT = '8081'
        CONTAINER_PORT = '8080'
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                echo "Checking out source code from GitHub..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh "docker build -t ${env.IMAGE_NAME}:${env.IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Logging in and pushing image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: "${env.DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push ${env.IMAGE_NAME}:${env.IMAGE_TAG}"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Deploying application container on host port ${env.HOST_PORT}..."
                sh """
                    # Remove the old container if it exists, ignoring errors if it doesn't
                    docker rm -f ${env.CONTAINER_NAME} || true
                    
                    # Run the newly built container using environment variables
                    docker run -d -p ${env.HOST_PORT}:${env.CONTAINER_PORT} --name ${env.CONTAINER_NAME} ${env.IMAGE_NAME}:${env.IMAGE_TAG}
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Verifying deployment..."
                sh "docker ps --filter name=${env.CONTAINER_NAME}"
            }
        }
    }

    post {
        failure {
            echo "Pipeline failed. Please check the logs above."
        }
        success {
            echo "Pipeline completed successfully!"
        }
    }
}
