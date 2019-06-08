# Sparta.games SPA 

## Features

- Laravel 5.4 (https://laravel.com/) + Vue (https://vuejs.org)  + Vue Router(https://router.vuejs.org) + Vuex (https://vuex.vuejs.org)
- Pages with custom layouts
- Integration with [vform](https://github.com/cretueusebiu/vform)
- Authentication with [JWT](https://github.com/tymondesigns/jwt-auth)
- Webpack with [laravel-mix](https://github.com/JeffreyWay/laravel-mix)
- Laravel Admin & BREAD System (Browse, Read, Edit, Add, & Delete)
- Plugin that allows you to manage your app's meta information [vuw-meta](https://github.com/declandewet/vue-meta) 

## Installation

- `git clone https://github.com/Hawkart/laravel-g.git`
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- `npm install` / `yarn`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```