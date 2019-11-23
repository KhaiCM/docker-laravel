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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
	Route::resource('companies', 'CompaniesController', ['except' => ['create', 'edit']]);
	Route::resource('blog', 'BlogsController', ['except' => ['create', 'edit']]);
	Route::resource('vato', 'VatosController', ['except' => ['create', 'edit']]);
	Route::resource('post', 'PostsController', ['except' => ['create', 'edit']]);
});

Route::get('categories', 'CategoryController@index');
Route::get('categories/{id}', 'CategoryController@show');
Route::get('categories/{id}/topics', 'CategoryController@topics')->name('topic.index');
