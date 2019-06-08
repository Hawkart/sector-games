<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\User;

class AddTaxCountryIdToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['subtype', 'min_sponsor_fee' ,'type']);
            $table->boolean('crowd_allow')->deafult(false);
            $table->integer('tax_country_id')->unsigned()->nullable();
            $table->string('type')->nullable();
            $table->foreign('tax_country_id')->references('id')->on('countries');
        });

        foreach(User::active()->get() as $user)
        {
            $user->update(['type' => 'player']);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['tax_country_id']);
            $table->dropColumn(['crowd_allow', 'tax_country_id', 'type']);
            $table->string('type')->nullable();
            $table->string('subtype')->nullable();
            $table->string('min_sponsor_fee')->nullable();
        });
    }
}
