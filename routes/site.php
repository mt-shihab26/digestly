<?php

use App\Http\Controllers\Site\HelpController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\PricingController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "index"])->name("home");
Route::get("/pricing", [PricingController::class, "index"])->name("pricing.index");
Route::get("/help", [HelpController::class, "index"])->name("help.index");
