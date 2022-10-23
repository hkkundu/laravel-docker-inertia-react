<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms', function (Blueprint $table) {
            $table->id();
            $table->string('page_name');
            $table->string('title');
            $table->longText('content');
            $table->string('featured_image')->nullable();
            $table->tinyInteger('status')->default('1');
            $table->string('banner_image')->nullable();
            $table->longText('banner_content')->nullable();
            $table->longText('second_title')->nullable();
            $table->longText('second_content')->nullable();
            $table->longText('third_title')->nullable();
            $table->longText('third_content')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cms');
    }
};
