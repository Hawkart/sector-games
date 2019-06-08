<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGcoreCdnToStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('streams', function (Blueprint $table) {
            $table->string('gcore_id')->unique();
            $table->renameColumn('url', 'stream_url');
            $table->timestamp('stream_start')->nullable();
            $table->timestamp('stream_end')->nullable();
            $table->string('stream_record')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('streams', function (Blueprint $table) {
            $table->renameColumn('stream_url', 'url');
            $table->dropColumn('gcore_id');
            $table->dropColumn('stream_start');
            $table->dropColumn('stream_end');
            $table->dropColumn('stream_record');
        });
    }
}
