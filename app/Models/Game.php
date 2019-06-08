<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests;

class Game extends Model
{
    public $timestamps = false;
    
    protected $fillable = ['genre_id'];
    
    /**
     * Scope a query to only active scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', '=', 1);
    }

    /**
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function genre()
    {
        return $this->belongsTo('App\Models\Genre');
    }
    
    /**
     * Get the fights that owns the game.
     * 
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fights()
    {
        return $this->hasMany('App\Models\Fight');
    }
    
    /**
     * Get the users which play the game.
     * 
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
    
    /**
     * Get the teams which play the game.
     * 
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function teams()
    {
        return $this->hasMany('App\Models\Team');
    }
    
    public function scopeSearch($query, $request)
    {
        if(!empty($request['id']))
        {
            $query->where('id', (int)$request['id']);
        }
        if(!empty($request['title']))
        {
            $query->where('title', 'like', "%".$request['title']."%");
        }
        if(!empty($request['genre_id']))
        {
            $query->where('genre_id', $request['genre_id']);
        }
        return $query;
    }
}