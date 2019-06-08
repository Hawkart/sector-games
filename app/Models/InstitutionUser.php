<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstitutionUser extends Model
{
    public $timestamps = true;
    protected $fillable = ['user_id', 'institution_id', 'number', 'char'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'institution_user';

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
    public function institution()
    {
        return $this->belongsTo('App\Models\Institution', 'institution_id');
    }
}