<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EduSchool extends Model
{
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['id', 'title', 'address', 'director', 'website', 'phone', 'props', 'emails'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'emails' => 'array',
        'props' => 'array'
    ];
}