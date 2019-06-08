<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFightUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fight_user', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fight_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('broadcast_url')->nullable();
            $table->boolean('confirm_end')->default(false);
            $table->boolean('winner')->default(false);
            $table->timestamp('end_at')->nullable();
            
            $table->foreign('fight_id')->references('id')->on('fights');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fight_user');
    }
}
