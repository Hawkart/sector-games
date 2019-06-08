<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSlugQuantityToTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function (Blueprint $table) {
            if(!Schema::hasColumn('teams', 'slug'))
            {
                $table->string('slug')->unique()->after('title');
            }
            if(!Schema::hasColumn('teams', 'quantity'))
            {
                $table->integer('quantity')->unsigned();
            }
            if(!Schema::hasColumn('teams', 'overlay'))
            {
                $table->string('overlay')->nullable();
            }
            if(!Schema::hasColumn('teams', 'game_id'))
            {
                $table->integer('game_id')->unsigned()->nullable();
                $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('teams', function (Blueprint $table) {
            
            if(Schema::hasColumn('teams', 'slug'))
            {
                $table->dropColumn('slug');
            }
            if(Schema::hasColumn('teams', 'quantity'))
            {
                $table->dropColumn('quantity');
            }
            if(Schema::hasColumn('teams', 'overlay'))
            {
                $table->dropColumn('overlay');
            }
            if(Schema::hasColumn('teams', 'game_id')) 
            {
                $table->dropForeign(['game_id']);
                $table->dropColumn('game_id');
            }
        });
    }
}