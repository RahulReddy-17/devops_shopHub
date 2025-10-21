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
                 script {
            def status = bat(script: 'npx vitest --reporter=junit --outputFile=reports/test-results.xml', returnStatus: true)
            if (status != 0) {
                echo 'Tests failed but continuing pipeline.'
              }
            }
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
