pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
        always {
            junit 'test-results/*.xml'
            archiveArtifacts artifacts: 'build/**/*', fingerprint: true
        }
    }
}