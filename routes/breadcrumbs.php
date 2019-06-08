<?php

// Home
Breadcrumbs::register('home', function($breadcrumbs)
{
    $breadcrumbs->push('Home', route('home'));
});

// Home > Games
Breadcrumbs::register('games', function($breadcrumbs)
{
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Games', route('games'));
});

// Home > Games > [Game]
Breadcrumbs::register('game', function($breadcrumbs, $game)
{
    $breadcrumbs->parent('games');
    $breadcrumbs->push($game->title, route('game', $game->id));
});

// Home > Games
Breadcrumbs::register('fights', function($breadcrumbs)
{
    $breadcrumbs->parent('home');
    $breadcrumbs->push('Fights', route('fights'));
});