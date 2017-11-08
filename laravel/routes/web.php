<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'cool'], function () {
  Route::resource('products', 'ProductsController', ['only' => ['index', 'create', 'item']]);
  Route::resource('products.descriptions', 'ProductDescriptionController', ['only' => ['index', 'create']]);
  Route::resource('images', 'ImageController', ['only' => ['index', 'create']]);
});

Route::get('magic/products/{id}', 'ProductsController@item');
