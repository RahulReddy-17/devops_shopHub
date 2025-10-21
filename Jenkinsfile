pipeline {
    agent any

    tools {
        flutter 'flutter-sdk' // Must be configured in Jenkins "Global Tool Configuration"
    }

    environment {
        GIT_REPO = 'https://github.com/Aash0811/shop_hub.git'
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: "${env.GIT_REPO}"
            }
        }

        stage('Setup Environment') {
            steps {
                echo 'Setting up Flutter environment...'
                sh 'flutter clean'
                sh 'flutter pub get'
            }
        }

        stage('Static Analysis') {
            steps {
                echo 'Analyzing Dart code...'
                sh 'flutter analyze'
            }
        }

        stage('Unit Tests') {
            steps {
                echo 'Running tests...'
                sh 'flutter test --coverage'
            }
            post {
                always {
                    junit '**/test-results.xml'
                    cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'coverage/lcov.info'
                }
            }
        }

        stage('Build APK') {
            steps {
                echo 'Building release APK...'
                sh 'flutter build apk --release'
            }
            post {
                success {
                    archiveArtifacts artifacts: 'build/app/outputs/flutter-apk/app-release.apk', fingerprint: true
                }
            }
        }

        stage('Optional: Deploy to Firebase App Distribution') {
            when {
                environment name: 'FIREBASE_TOKEN', value: ''
            }
            steps {
                echo 'Deploying release build to Firebase App Distribution...'
                sh '''
                firebase appdistribution:distribute build/app/outputs/flutter-apk/app-release.apk \
                  --app $FIREBASE_APP_ID \
                  --groups "testers" \
                  --token $FIREBASE_TOKEN
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and tests succeeded!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs for details.'
        }
    }
}
