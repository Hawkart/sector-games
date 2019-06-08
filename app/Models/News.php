<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests;

class News extends Model
{
    protected $fillable = ['author_id'];
    
    /**
     * Scope a query to only active scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', '=', 'PUBLISHED');
    }
}