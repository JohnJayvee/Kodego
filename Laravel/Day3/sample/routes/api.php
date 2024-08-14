<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MichController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('sample_api',[MichController::class, 'index']);
Route::post('sample_api',[MichController::class, 'store']);
Route::get('sample_api/{id}',[MichController::class, 'show']);
Route::put('sample_api/edit/{id}',[MichController::class, 'edit']);
Route::delete('sample_api/delete/{id}',[MichController::class, 'destroy']);


