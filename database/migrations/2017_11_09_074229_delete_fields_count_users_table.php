<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DeleteFieldsCountUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fights', function (Blueprint $table) {
            $table->dropColumn('count_team_users');
            $table->integer('created_team_id')->unsigned()->nullable();
            $table->decimal('bet', 8, 2);
            $table->foreign('created_team_id')->references('id')->on('teams');
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
            $table->integer('count_team_users')->unsigned()->nullable();
            $table->dropForeign('fights_created_team_id_foreign');
            $table->dropColumn('created_team_id');
            $table->dropColumn('bet');
        });
    }
}
