<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $fillable = ['title','is_base'];

    protected $dates = ['created_at', 'updated_at'];

    public function rates()
    {
        return $this->hasMany('App\Models\ExchangeRate');
    }
}