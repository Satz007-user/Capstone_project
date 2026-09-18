pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'sathya10dock'
        IMAGE_NAME = 'node-devops-app'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'node-app-local'
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
                sh "docker build -t ${env.DOCKER_HUB_USER}/${env.IMAGE_NAME}:${env.IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Logging in and pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-token', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u "$DOCKER_USER" -p "$DOCKER_PASSWORD"'
                    sh "docker push ${env.DOCKER_HUB_USER}/${env.IMAGE_NAME}:${env.IMAGE_TAG}"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying application container on host port 8081...'
                sh 'docker rm -f ${CONTAINER_NAME} || true'
                sh "docker run -d -p 8081:8080 --name ${env.CONTAINER_NAME} ${env.DOCKER_HUB_USER}/${env.IMAGE_NAME}:${env.IMAGE_TAG}"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying container health status...'
                sh 'docker ps | grep ${CONTAINER_NAME}'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Application is live on port 8081.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs above.'
        }
    }
}
