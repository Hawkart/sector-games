<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fights', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('active')->default(1);
            $table->integer('game_id')->unsigned()->nullable();
            $table->string('title');
            $table->integer('created_id')->unsigned()->nullable();
            $table->enum('type', ['personal', 'team']);
            $table->integer('count_parts')->unsigned();
            $table->integer('count_team_users')->unsigned()->nullable();
            $table->timestamp('start_at')->nullable();
            $table->timestamp('end_at')->nullable();
            $table->float('min_fee_total')->nullable();
            $table->float('min_fee')->nullable();
            $table->boolean('changed_fee')->default(false);
            $table->integer('judge_id')->unsigned()->nullable();
            $table->integer('commentator_id')->unsigned()->nullable();
            $table->integer('winner_id')->unsigned()->nullable();
            $table->text('result')->nullable();
            $table->boolean('changed_time')->default(false);
            $table->boolean('canceled')->default(false);
            $table->text('cancel_text')->nullable();
            $table->integer('cancel_user_id')->unsigned()->nullable();
            $table->timestamps();
            
            $table->foreign('game_id')->references('id')->on('games');
            $table->foreign('created_id')->references('id')->on('users');
            $table->foreign('judge_id')->references('id')->on('users');
            $table->foreign('commentator_id')->references('id')->on('users');
            $table->foreign('cancel_user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fights');
    }
}
