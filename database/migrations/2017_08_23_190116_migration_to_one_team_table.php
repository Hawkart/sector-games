<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MigrationToOneTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('team_id')->unsigned()->nullable();
            $table->integer('game_id')->unsigned()->nullable();
            
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
        });
        
        Schema::dropIfExists('team_user_requests');
        Schema::dropIfExists('fight_user');
        
        Schema::table('team_user', function (Blueprint $table) {
            $table->timestamps();
            $table->timestamp('start_at')->nullable();
            $table->timestamp('end_at')->nullable();
        });
        
        Schema::table('fights', function (Blueprint $table) {
            $table->dropColumn('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
