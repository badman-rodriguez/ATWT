<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/products/all', 'ProductsController@all');
Route::resource('products', 'ProductsController', ['only' => ['store', 'edit', 'update']]);
Route::resource('images', 'ImageController', ['only' => ['store', 'update']]);

// Route::middleware('auth:api')->get('/products', function (Request $request) {
//     return $request->user();
// });
