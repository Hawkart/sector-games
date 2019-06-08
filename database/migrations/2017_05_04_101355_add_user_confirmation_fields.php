<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserConfirmationFields extends Migration
{
    public function __construct()
    {
        DB::getDoctrineSchemaManager()->getDatabasePlatform()->registerDoctrineTypeMapping('enum', 'string');
    }
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function ($table) {
            $table->enum('type', ['player', 'investor'])->nullable();
            $table->string('second_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('nickname')->unique();
            $table->string('phone')->nullable();
            $table->boolean('active')->default(false);
            $table->boolean('confirmed')->default(false);
            $table->string('confirmation_code')->nullable();
            $table->float('rating')->unsigned()->nullable();
            $table->integer('team_wins')->unsigned()->nullable();
            $table->integer('person_wins')->unsigned()->nullable();
            $table->integer('min_sponsor_fee')->unsigned()->nullable();
            $table->float('credit_rating')->unsigned()->nullable();
            $table->enum('notify', ['y', 'n'])->default('y');
            
            $table->string('email')->nullable()->change();
            $table->dropUnique('users_email_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function ($table) {
            $table->dropColumn('type');
            $table->dropColumn('second_name');
            $table->dropColumn('last_name');
            $table->dropColumn('nickname');
            $table->dropColumn('active');
            $table->dropColumn('confirmed');
            $table->dropColumn('confirmation_code');
            $table->dropColumn('rating');
            $table->dropColumn('team_wins');
            $table->dropColumn('person_wins');
            $table->dropColumn('min_sponsor_fee');
            $table->dropColumn('credit_rating');
            $table->dropColumn('notify');
            $table->string('email')->unique()->change();
        });
    }
}