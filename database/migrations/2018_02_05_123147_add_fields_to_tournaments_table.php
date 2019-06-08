<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToTournamentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tournaments', function (Blueprint $table) {
            $table->timestamp('contract_start_at')->nullable();
            $table->timestamp('contract_end_at')->nullable();
            $table->timestamp('final_at')->nullable();
            $table->string('period')->nullable();
            $table->string('period_start_at')->nullable();
            $table->string('period_final_at')->nullable();
            $table->string('period_register_at')->nullable();
            $table->timestamp('register_start')->nullable();    
            $table->string('winners_part'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tournaments', function (Blueprint $table) {
            $table->dropColumn(['contract_start_at', 'contract_end_at', 'period', 'period_start_at', 'period_final_at', 'register_start', 'winners_part']);
        });
    }
}
