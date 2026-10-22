<?php

use App\Http\Controllers\Site\HelpController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\PricingController;
use App\Http\Controllers\Site\PrivacyController;
use App\Http\Controllers\Site\TermController;
use App\Http\Controllers\Site\UnsubscribeController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "index"])->name("site.home");
Route::get("/pricing", [PricingController::class, "index"])->name("site.pricing.index");
Route::get("/help", [HelpController::class, "index"])->name("site.help.index");
Route::get("/privacy", [PrivacyController::class, "index"])->name("site.privacy.index");
Route::get("/terms", [TermController::class, "index"])->name("site.terms.index");
Route::get("/unsubscribe", [UnsubscribeController::class, "index"])->name("site.unsubscribe.index");
