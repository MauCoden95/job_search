<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\CompanyController;

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

Route::controller(CompanyController::class)->group(function () {
    Route::get('/companies', 'index');
    Route::get('/company/{name}', 'getCompanyByName');
});


Route::controller(JobController::class)->group(function () {
    Route::get('/all-jobs', 'all');
    Route::get('/latest-jobs', 'latest');
    Route::get('/job-detail/{id}', 'jobDetail');
    Route::get('/jobs-search/{title}/{location}', 'search');
    Route::get('/count-category', 'countCategories');
});


