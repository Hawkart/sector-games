<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFightFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fight_fees', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fight_id')->unsigned();
            $table->integer('sponsor_id')->unsigned();
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('team_id')->unsigned()->nullable();
            $table->float('amount')->unsigned();
            $table->timestamps();
            
            $table->foreign('fight_id')->references('id')->on('fights');
            $table->foreign('sponsor_id')->references('id')->on('users');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('fight_fees');
    }
}
