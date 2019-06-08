<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    public $timestamps = false;

    protected $fillable = ['parent_id', 'title'];

    /**
     * @Relation
     */
    public function parent()
    {
        return $this->belongsTo('App\Models\Location');
    }

    /**
     * @Relation
     */
    public function institutions()
    {
        return $this->hasMany('App\Models\Institution');
    }
}