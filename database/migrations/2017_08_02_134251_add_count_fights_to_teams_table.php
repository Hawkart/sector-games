<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCountFightsToTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->float('total_sum')->unsigned()->default(0)->nullable();
            $table->integer('count_wins')->default(0);
            $table->integer('count_losses')->default(0);
            $table->integer('count_fights')->default(0);
            $table->float('payed_dividents')->unsigned()->default(0)->nullable();
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
            $table->dropColumn('total_sum');
            $table->dropColumn('count_wins');
            $table->dropColumn('count_losses');
            $table->dropColumn('count_fights');
            $table->dropColumn('payed_dividents');
        });
    }
}