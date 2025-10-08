pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Smoke Suite') {
            steps {
                script {
                    // bat 'npx rim-raf allure-results'
                    def status = bat(script: 'npx playwright test --grep "@smoke" --reporter=html', returnStatus: true)
                    if (status != 0) {
                        echo "Tests failed, but continuing to generate reports..."
                    }
                    
                }
            }
        }
        stage('Run Regression Suite') {
            steps {
                script {
                    // bat 'npx rim-raf allure-results'
                    def status = bat(script: 'npx playwright test --grep "@regression" --reporter=html', returnStatus: true)
                    if (status != 0) {
                        echo "Tests failed, but continuing to generate reports..."
                    }
                    
                }
            }
        }
    }

    post {
        always {
            echo 'Generating Allure and HTML reports...'

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                 alwaysLinkToLastBuild: true,
                allowMissing: true,
                linkRelative: false
            ])

            // allure([
            //     includeProperties: false,
            //     jdk: '',
            //     results: [[path: 'allure-results']]
            // ])
        }
    }
}
