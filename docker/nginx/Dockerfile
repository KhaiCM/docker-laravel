FROM nginx:latest

LABEL maintainer="Chu Minh Khai <minhkhai97dbp@gmail.com>"

ARG UID=1000

ENV TERM xterm
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY upstream.conf /etc/nginx/conf.d/upstream.conf
COPY ssl/localhost.key /etc/nginx/ssl/localhost.key
COPY ssl/localhost.cert /etc/nginx/ssl/localhost.cert
RUN usermod -u ${UID} www-data
RUN mkdir -p /var/www/laravel/public/ \
    && touch /var/www/laravel/public/index.php

CMD ["nginx"]

EXPOSE 80 443
