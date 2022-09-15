# Setup ————————————————————————————————————————————————————————————————————————
SHELL         = bash
PROJECT       = az-symfony-demo
USER 		  = $(shell id -u)
GROUP		  = $(shell id -g)
SYMFONY_BIN   = symfony
PHP           = $(SYMFONY_BIN) php
SYMFONY       = $(SYMFONY_BIN) console
COMPOSER      = $(SYMFONY_BIN) composer
DOCKER_ENV    = USER_ID=$(USER) GROUP_ID=$(GROUP)
DOCKER		  = docker-compose
PHPQA		  = $(DOCKER_ENV) $(DOCKER) run --rm phpqa
YARN          = $(DOCKER) run --rm node yarn
.DEFAULT_GOAL = help
# Forcing run of not-file-related targets
.PHONY: tests assets

# Default arguments values ————————————————————————————————————————————————————
env = dev

## —— THE Symfony Makefile 🍺 ——————————————————————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

wait: docker-wait-database ## Sleep until service are ready

## —— Project 🛠———————————————————————————————————————————————————————————————
install-up: bin-install docker-up composer-install wait db-schema assets

install: install-up docker-down ## Install requirements (create database, install php dependencies and build assets)

run: install-up symfony-start ## Start docker and start the web server

abort: docker-down symfony-stop ## Stop docker and the Symfony binary server

log: ## Show symfony log
	$(SYMFONY_BIN) server:log

assets: yarn-install ## Run Webpack Encore to compile development assets
	$(YARN) encore dev

## —— Composer 🧙‍♂️ ————————————————————————————————————————————————————————————
vendor/autoload.php: symfony composer.lock
	$(COMPOSER) install --no-progress --prefer-dist --optimize-autoloader

composer-install: vendor/autoload.php  ## Install vendors according to the current composer.lock file

composer-update: symfony composer.json ## Update vendors according to the composer.json file
	$(COMPOSER) update

## —— Symfony 🎵 ———————————————————————————————————————————————————————————————
cc: ## Clear the cache. DID YOU CLEAR YOUR CACHE????
	$(SYMFONY) doctrine:cache:clear-metadata
	$(SYMFONY) doctrine:cache:clear-query
	$(SYMFONY) doctrine:cache:clear-result
	$(SYMFONY) cache:clear --env=$(env)

## —— Symfony binary 💻 ————————————————————————————————————————————————————————
symfony:
	curl -sS https://get.symfony.com/cli/installer | bash
	mv ~/.symfony5/bin/symfony .

bin-install: symfony ## Download and install the binary in the project (file is ignored)

bin-update: symfony ## Update Symfony CLI (the binary in the project)
	$(SYMFONY_BIN) self:update

cert-install: symfony ## Install the local HTTPS certificates
	$(SYMFONY_BIN) server:ca:install

symfony-start: symfony ## Serve the application with HTTPS support
	$(SYMFONY_BIN) serve --daemon

symfony-stop: symfony ## Stop the web server
	$(SYMFONY_BIN) server:stop

symfony-security: symfony ## Launch dependencies security check
	$(SYMFONY_BIN) check:security

symfony-requirements: symfony ## Launch symfony requirements check
	$(SYMFONY_BIN) check:requirements

## —— Docker 🐳 ————————————————————————————————————————————————————————————————
docker-up: docker-compose.yaml ## Start the docker hub (MySQL,redis,phpmyadmin,mailcatcher)
	$(DOCKER_ENV) $(DOCKER) up -d

docker-down: docker-compose.yaml ## Stop the docker hub
	$(DOCKER_ENV) $(DOCKER) down --remove-orphans

docker-database-up: docker-compose.yaml ## Start the database container
	$(DOCKER_ENV) $(DOCKER) up -d database

docker-node-up: docker-compose.yaml ## Start the node container
	$(DOCKER_ENV) $(DOCKER) up -d node

docker-phpqa-up: docker-compose.yaml ## Start the phpqa container
	$(DOCKER_ENV) $(DOCKER) up -d phpqa

docker-wait-database: docker-compose.yaml ## Wait for docker [database] to be ready
	@bin/wait-for-database.sh

## —— CI: Tests ✅ —————————————————————————————————————————————————————————————
tests: ## Run the PHPUnit tests
	$(PHP) vendor/bin/simple-phpunit install
	$(PHP) vendor/bin/simple-phpunit

## —— CI: Coding standards ✨ ——————————————————————————————————————————————————
php-cs-fixer:
	$(PHPQA) php-cs-fixer fix --diff --dry-run

php-stan: ## Run PHPStan
	$(PHPQA) phpstan analyse --no-interaction src/

## —— Database 📑 ——————————————————————————————————————————————————————————————
db-cache: ## Clear database metadata cache
	$(SYMFONY) doctrine:cache:clear-metadata --env=$(env)

db-create: db-cache ## Create the database
	$(SYMFONY) doctrine:database:create --if-not-exists --env=$(env)

db-schema: db-create ## Update the database schema
	$(SYMFONY) doctrine:schema:update --force --env=$(env) -q

db-fixtures: db-schema ## Load the fixtures
	$(SYMFONY) doctrine:fixtures:load --env=$(env) -n

## —— Assets 💄 ——————————————————————————————————————————————————————————
yarn.lock: yarn-install

yarn-install: package.json ## Install yarn packages
	$(YARN) install

yarn-build: yarn-install ## Run Webpack Encore to compile production assets
	@$(YARN) build
