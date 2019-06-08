<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTournametsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parent_id')->nullable();
            $table->integer('game_id')->unsigned();
            $table->string('title');
            $table->timestamp('start_at')->nullable();
            $table->timestamp('end_at')->nullable();
            $table->decimal('buy_in', 8, 2);
            $table->integer('prize_pool')->default(0)->unsigned();
            $table->tinyInteger('count_teams')->default(8)->unsigned();
            $table->tinyInteger('min_teams')->default(4)->unsigned();
            $table->tinyInteger('count_wins')->default(1)->unsigned();
            $table->text('description')->nullable();
            $table->text('rules')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_multiple')->default(1);
            $table->tinyInteger('status')->default(0)->unsigned();
            $table->string('promocode')->nullable();
            $table->timestamps();
            
            $table->foreign('game_id')->references('id')->on('games');
        });
        
        Schema::create('team_tournament', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tournament_id')->unsigned();
            $table->integer('team_id')->unsigned();
            $table->tinyInteger('place')->unsigned();
            $table->timestamps();
            
            $table->foreign('tournament_id')->references('id')->on('tournaments');
            $table->foreign('team_id')->references('id')->on('teams');
        });
        
        Schema::table('fights', function (Blueprint $table) {
            $table->integer('tournament_id')->nullable();
            $table->integer('tournament_step')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tournaments');
        Schema::dropIfExists('team_tournament');
                
        Schema::table('fights', function (Blueprint $table) {
            $table->dropColumn(['tournament_id', 'tournament_step']);
        });
    }
}
