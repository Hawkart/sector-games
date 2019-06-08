<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//social auth
Route::get('/social/{provider}', 'SocialController@login')->name('social.auth');
Route::get('/social/{provider}/callback', 'SocialController@callback');

Route::get('/password/reset/{token?}', function () {
    return view('index');
})->name('password.reset');

Route::get('{path}', function () {
    return view('index');
})->where('path', '(.*)');