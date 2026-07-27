# Pesona Danau Toba

Situs informasi wisata Danau Toba - statis (HTML/CSS/JS), multi-halaman,
dibangun untuk latihan deploy otomatis via Docker + Jenkins.

## Struktur
```
.
├── index.html        Beranda
├── destinasi.html     Destinasi wisata
├── budaya.html        Budaya Batak (ulos, gorga, gondang & tortor)
├── galeri.html        Galeri foto
├── kontak.html        Kontak & peta
├── css/style.css
├── js/main.js
├── Dockerfile
├── nginx.conf
├── docker-compose.yml Port 8081 (agar tidak bentrok dengan project todo-cicd di port 80)
└── Jenkinsfile
```

## Menjalankan lokal
Buka langsung `index.html` di browser, atau jalankan lewat Docker:
```
docker compose up -d --build
```
Akses di `http://localhost:8081`.
