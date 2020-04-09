FROM php:7.3-fpm

LABEL maintainer="Chu Minh Khai <minhkhai97dbp@gmail.com>"

ENV DEBCONF_NOWARNINGS yes
ENV TERM xterm

ARG UID=1000

RUN apt-get update && apt-get install -y \
    libpq-dev \
    libmemcached-dev \
    curl \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libssl-dev \
    libmcrypt-dev \
    vim \
    zlib1g-dev libicu-dev g++ \
    libc-client-dev \
    libkrb5-dev \
    libmagickwand-dev \
    --no-install-recommends \
    libfreetype6-dev \
    libaio1 \
    unzip \
    libzip-dev \
    && rm -r /var/lib/apt/lists/*

# Configure gd library
RUN docker-php-ext-configure gd \
    --with-jpeg-dir=/usr/lib \
    --with-freetype-dir=/usr/include/freetype2

# Configure intl
RUN docker-php-ext-configure intl

# Install mongodb, xdebug
RUN pecl install mongodb \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

# Install extensions using the helper script provided by the base image
RUN docker-php-ext-install \
    bcmath \
    pdo_mysql \
    pdo_pgsql \
    gd \
    intl \
    zip

# Install imap
RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl && docker-php-ext-install imap


# Install imagick
RUN pecl install imagick \
    && docker-php-ext-enable imagick

RUN mkdir /var/www/.azure
RUN usermod -u ${UID} www-data
RUN chown www-data /var/www/.azure

WORKDIR /var/www/laravel

ADD ./laravel.ini /usr/local/etc/php/conf.d/
ADD ./laravel.pool.conf /usr/local/etc/php-fpm.d/

CMD ["php-fpm"]

EXPOSE 9000
