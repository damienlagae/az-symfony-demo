Symfony Demo Application
========================

The "Symfony Demo Application" is a reference application created to show how
to develop applications following the [Symfony Best Practices][1].

Requirements
------------

  * PHP 8.0.2 or higher;
  * MySQL PHP extension enabled;
  * docker & docker-compose
  * and the [usual Symfony application requirements][2].

Installation
------------

```bash
$ composer install
```

Usage
-----

There's no need to configure anything to run the application. If you have
[installed Symfony][3] binary, run this command:

```bash
$ cd my_project/
$ docker-compose -d
$ symfony server:start -d
```

Then access the application in your browser at the given URL (<https://localhost:8000> by default).

Tests
-----

Execute this command to run tests:

```bash
$ cd my_project/
$ ./bin/phpunit
```

[1]: https://symfony.com/doc/current/best_practices.html
[2]: https://symfony.com/doc/current/reference/requirements.html
[3]: https://symfony.com/download
