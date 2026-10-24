<?php

use App\Http\Controllers\Site\ChangelogController;
use App\Http\Controllers\Site\HelpController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\PricingController;
use App\Http\Controllers\Site\PrivacyController;
use App\Http\Controllers\Site\RobotsController;
use App\Http\Controllers\Site\SitemapController;
use App\Http\Controllers\Site\TermController;
use App\Http\Controllers\Site\UnsubscribeController;
use App\Http\Controllers\Site\WellKnownController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "index"])->name("site.home");
Route::get("/pricing", [PricingController::class, "index"])->name("site.pricing.index");
Route::get("/help", [HelpController::class, "index"])->name("site.help.index");
Route::get("/privacy", [PrivacyController::class, "index"])->name("site.privacy.index");
Route::get("/terms", [TermController::class, "index"])->name("site.terms.index");
Route::get("/unsubscribe", [UnsubscribeController::class, "index"])->name("site.unsubscribe.index");
Route::get("/changelog", [ChangelogController::class, "index"])->name("site.changelog.index");
Route::get("/changelog.xml", [ChangelogController::class, "feed"])->name("site.changelog.feed");
Route::get("/sitemap", [SitemapController::class, "index"])->name("site.sitemap.show");
Route::get("/sitemap.xml", [SitemapController::class, "xml"])->name("site.sitemap.index");
Route::get("/robots.txt", [RobotsController::class, "index"])->name("site.robots.index");
Route::get("/.well-known/passkey-endpoints", [WellKnownController::class, "passkeys"])->name("well-known.passkeys");
Route::get("/.well-known/security.txt", [WellKnownController::class, "security"])->name("well-known.security");
