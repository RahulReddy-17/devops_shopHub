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
                bat 'npm test -- --reporter mocha-junit-reporter --reporter-options mochaFile=reports/test-results.xml'
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
            junit 'reports/**/*.xml'
        }
    }
}
