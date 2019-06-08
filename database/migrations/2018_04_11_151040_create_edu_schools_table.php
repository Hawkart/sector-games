<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEduSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edu_schools', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title')->unique();
            $table->string('website')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->text('emails')->nullable();
            $table->string('director')->nullable();
            $table->text('props')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('edu_schools');
    }
}
