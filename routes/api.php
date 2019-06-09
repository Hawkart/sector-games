<?php

use Illuminate\Http\Request;

/**
 * oAuth social
 */
Route::get('/social/{provider}', 'SocialController@login')->name('social.auth');
Route::get('/social/{provider}/callback', 'SocialController@callback');
Route::post('/social/{provider}', 'SocialController@redirectToProvider');