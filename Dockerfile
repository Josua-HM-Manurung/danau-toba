# Situs ini murni HTML/CSS/JS statis - tidak perlu tahap "build",
# cukup satu tahap: copy semua file ke folder Nginx dan jalankan.
FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
