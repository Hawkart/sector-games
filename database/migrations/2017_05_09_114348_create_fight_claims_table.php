<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFightClaimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fight_claims', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fight_id')->unsigned();
            $table->integer('sponsor_id')->unsigned();
            $table->text('text');
            $table->boolean('decided')->default(false);
            $table->timestamps();
            
            $table->foreign('fight_id')->references('id')->on('fights');
            $table->foreign('sponsor_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fight_claims');
    }
}
