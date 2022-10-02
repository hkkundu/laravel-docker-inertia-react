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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id()->unsigned()->index();
            $table->bigInteger('user_id')->unsigned()->index();
            $table->string('mobile',20)->nullable();
            $table->string('business_name')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('location')->nullable();
            $table->text('address')->nullable();
            $table->string('business_type')->nullable();
            $table->longText('about')->nullable();
            $table->longText('website')->nullable();
            $table->string('add_lat',20)->nullable();
            $table->string('add_lng',20)->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_profiles');
    }
};
