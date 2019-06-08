<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDeleteCascadeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fights', function (Blueprint $table) {
            $table->dropForeign('fights_created_id_foreign');
            $table->dropForeign('fights_game_id_foreign');
            $table->dropForeign('fights_judge_id_foreign');
            $table->dropForeign('fights_commentator_id_foreign');

            $table->foreign('judge_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('commentator_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('created_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
        });
        
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_game_id_foreign');
            $table->dropForeign('users_team_id_foreign');
            
            $table->foreign('team_id')->references('id')->on('teams');
            $table->foreign('game_id')->references('id')->on('games');
        });
        
        Schema::table('teams', function (Blueprint $table) {
            $table->dropForeign('teams_game_id_foreign');
            $table->dropForeign('teams_capt_id_foreign');      
            $table->foreign('game_id')->references('id')->on('games');
            $table->foreign('capt_id')->references('id')->on('users');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fights', function (Blueprint $table) {
            //
        });
    }
}
