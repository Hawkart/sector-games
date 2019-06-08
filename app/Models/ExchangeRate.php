<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    protected $table = 'exchange_rates';

    protected $fillable = ['currency_id','rate'];

    protected $dates = ['created_at', 'updated_at'];

    public function currency()
    {
        return $this->belongsTo('App\Models\Currency');
    }
}