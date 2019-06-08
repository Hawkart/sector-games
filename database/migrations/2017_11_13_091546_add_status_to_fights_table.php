<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatusToFightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fights', function (Blueprint $table) {
            $table->integer('status')->unsigned()->default(0);
            $table->dropColumn('active');
            $table->dropColumn('canceled');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fights', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->boolean('active')->default(1);
            $table->boolean('canceled')->default(false);
        });
    }
}
