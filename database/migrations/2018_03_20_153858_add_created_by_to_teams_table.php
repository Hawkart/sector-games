<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCreatedByToTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->integer('created_id')->unsigned();
            $table->integer('revenue')->unsigned()->default(0);
            $table->integer('salary')->unsigned()->default(0);
            $table->integer('coach_id')->unsigned()->nullable();

            //$table->foreign('created_id')->references('id')->on('users');
            $table->foreign('coach_id')->references('id')->on('users');
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
            $table->dropColumn(['created_id', 'coach_id', 'salary', 'revenue']);
        });
    }
}
