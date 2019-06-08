<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamUser extends Model
{
    public $timestamps = true;
    protected $fillable = ['user_id', 'team_id', 'sender_id', 'status', 'start_at', 'end_at'];
    
    const PENDING = 0;
    const ACCEPTED = 1;
    const DENIED = 2;
    
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'team_user';
    
    /**
     * @Relation
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    
    /**
     * @Relation
     */
    public function sender()
    {
        return $this->belongsTo('App\User', 'sender_id');
    }
    
    /**
     * @Relation
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'team_id');
    }
}