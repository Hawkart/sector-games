<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVkSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vk_schools', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('emails')->nullable();
            $table->integer('region_id')->unsigned();
            $table->integer('country_id')->unsigned();
            $table->integer('city_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vk_schools');
    }
}