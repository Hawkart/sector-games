<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeScheduleTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->dropColumn('schedule');
            $table->text('schedule')->nullable();
            //$table->json('schedule')->nullable();
        });
        
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('schedule');
            $table->text('schedule')->nullable();
            //$table->json('schedule')->nullable();
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
            //$table->dropColumn('schedule');
            //$table->json('text');
        });
    }
}