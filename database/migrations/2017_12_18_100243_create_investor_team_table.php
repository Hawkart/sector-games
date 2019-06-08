<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvestorTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investor_team', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('team_id')->unsigned()->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->float('invest_price')->unsigned()->default(0)->nullable();
            $table->boolean('owner')->default(false);
            
            $table->foreign('team_id')->references('id')->on('teams');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investor_team');
    }
}
