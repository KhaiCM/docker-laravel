FROM ubuntu:16.04

LABEL maintainer="Chu Minh Khai <minhkhai97dbp@gmail.com>"

# Update apt & install sudo
RUN apt-get update && apt-get install sudo

ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NOWARNINGS yes

# Install "apt-utils"
RUN apt-get install --assume-yes apt-utils

# Install "software-properties-common" (for the "add-apt-repository")
RUN apt-get install -y software-properties-common locales

RUN locale-gen en_US.UTF-8

ENV LANGUAGE=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8
ENV LC_CTYPE=UTF-8
ENV LANG=en_US.UTF-8
ENV TERM xterm

# Add the "PHP 7" ppa
RUN add-apt-repository -y \
    ppa:ondrej/php

# Install PHP-CLI 7, some PHP extentions and some useful Tools with APT
RUN apt-get update && apt-get install -y --assume-yes \
        php7.3-cli \
        php7.3-common \
        php7.3-curl \
        php7.3-json \
        php7.3-xml \
        php7.3-mbstring \
        php7.3-mysql \
        php7.3-pgsql \
        php7.3-sqlite \
        php7.3-sqlite3 \
        php7.3-zip \
        php7.3-memcached \
        php7.3-gd \
        php7.3-fpm \
        php7.3-xdebug \
        php7.3-bcmath \
        php7.3-intl \
        php7.3-dev \
        php7.3-imap \
        php7.3-imagick \
        libcurl4-openssl-dev \
        libedit-dev \
        libssl-dev \
        libxml2-dev \
        xz-utils \
        sqlite3 \
        libsqlite3-dev \
        git \
        curl \
        vim \
        nano \
        net-tools \
        pkg-config \
        iputils-ping \
        libfreetype6-dev \
        libaio1 \
        unzip

# Remove load xdebug extension (only load on phpunit command)
RUN sed -i 's/^/;/g' /etc/php/7.3/cli/conf.d/20-xdebug.ini

# Install mongodb extension
RUN pecl channel-update pecl.php.net && pecl install mongodb
RUN echo "extension=mongodb.so" >> /etc/php/7.3/cli/php.ini

# Install Nodejs
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g gulp-cli eslint babel-eslint eslint-plugin-react eslint-plugin-standard eslint-plugin-vue yarn

# Install SASS
RUN apt-get install -y ruby ruby-dev \
    && gem install sass

# Install Composer, PHPCS and Framgia Coding Standard,
# PHPMetrics, PHPDepend, PHPMessDetector, PHPCopyPasteDetector
RUN curl -s http://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer && chmod +x /usr/local/bin/composer

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create symlink
RUN ln -s /root/.composer/vendor/bin/phpcs /usr/bin/phpcs \
    && ln -s /root/.composer/vendor/bin/pdepend /usr/bin/pdepend \
    && ln -s /root/.composer/vendor/bin/phpmetrics /usr/bin/phpmetrics \
    && ln -s /root/.composer/vendor/bin/phpmd /usr/bin/phpmd \
    && ln -s /root/.composer/vendor/bin/phpcpd /usr/bin/phpcpd

# Add bin folder of composer to PATH.
RUN echo "export PATH=${PATH}:/var/www/laravel/vendor/bin:/root/.composer/vendor/bin" >> ~/.bashrc

# Load xdebug Zend extension with phpunit command
RUN echo "alias phpunit='php -dzend_extension=xdebug.so /var/www/laravel/vendor/bin/phpunit'" >> ~/.bashrc

WORKDIR /var/www/laravel
