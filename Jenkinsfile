pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/RahulReddy-17/devops_shopHub.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Use npx to ensure vitest runs from local node_modules
                bat 'npx vitest --reporter=junit --outputFile=reports/test-results.xml'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying your project...'
            }
        }
    }

    post {
        always {
            // Publish JUnit test results for Jenkins UI
            junit 'reports/test-results.xml'
        }
    }
}
