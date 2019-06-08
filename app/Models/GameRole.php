<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests;

class GameRole extends Model
{
    public $timestamps = false;
    protected $table = 'game_roles';
    protected $fillable = ['game_id', 'title', 'image'];

    /**
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function game()
    {
        return $this->belongsTo('App\Models\Game');
    }
}