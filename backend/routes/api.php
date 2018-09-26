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

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization, auth');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/test", function(){
    return " coba 123";
});

//Route::get("/category", "CategoryController@coba");

Route::resource("/categories", "CategoryController");

Route::resource("/products", "ProductController");

//Route::resources([
//   "categories" => "CategoryController",
//   "products"
//]);

Route::middleware("guest_only")->get("/guest", function(){
    return "guest only";
});