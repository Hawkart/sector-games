<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    public $timestamps = false;

    protected $fillable = ['id', 'title', 'location_id', 'address', 'director', 'website', 'phone', 'emails', 'vk_id'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'emails' => 'array'
    ];

    /**
     * @Relation
     */
    public function location()
    {
        return $this->belongsTo('App\Models\Location');
    }
	
	/**
     * @Relation
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
	
	/**
     * @Relation
     */
    public function teams()
    {
        return $this->hasMany('App\Models\Team');
    }
}