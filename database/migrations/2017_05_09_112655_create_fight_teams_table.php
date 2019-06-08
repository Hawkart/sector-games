<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFightTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fight_team', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fight_id')->unsigned();
            $table->integer('team_id')->unsigned();
            
            $table->foreign('fight_id')->references('id')->on('fights');
            $table->foreign('team_id')->references('id')->on('teams');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fight_team');
    }
}
