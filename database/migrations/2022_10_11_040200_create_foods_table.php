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
        Schema::create('food', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('categori_id')->unsigned()->index();
            $table->bigInteger('pub_id')->unsigned()->index();
            $table->string('name',200)->nullable();
            $table->string('image',200)->nullable();
            $table->string('price',10)->nullable();
            $table->longText('description')->nullable();
            $table->string('space',50)->nullable();
            $table->tinyInteger('status')->default(1);
            $table->foreign('categori_id')->references('id')->on('categories')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('pub_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('restrict');
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
        Schema::dropIfExists('food');
    }
};
