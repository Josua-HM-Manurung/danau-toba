pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Mengambil source code dari Git...'
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                echo 'Membangun Docker image situs Danau Toba...'
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Menjalankan ulang container...'
                sh '''
                    docker compose down
                    docker compose up -d
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Menunggu situs siap, lalu cek responsnya...'
                sh '''
                    sleep 5
                    curl -f http://localhost:8081
                '''
            }
        }
    }

    post {
        success {
            echo 'Situs Danau Toba berhasil ter-deploy!'
        }
        failure {
            echo 'Pipeline gagal, menampilkan log container untuk debug:'
            sh 'docker compose logs --tail=50 || true'
        }
    }
}
