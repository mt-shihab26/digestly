<?php

use App\Http\Controllers\App\DataController;
use App\Http\Controllers\App\DigestController;
use App\Http\Controllers\App\DiscoverController;
use App\Http\Controllers\App\IntegrationController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\SecurityController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;

Route::middleware(["auth", "verified"])->group(function () {
    Route::inertia("dashboard", "dashboard")->name("app.dashboard");
});

Route::middleware(["auth"])->group(function () {
    Route::redirect("settings", "/settings/profile");

    Route::get("settings/profile", [ProfileController::class, "edit"])->name("app.profile.edit");
    Route::patch("settings/profile", [ProfileController::class, "update"])->name("app.profile.update");
});

Route::middleware(["auth", "verified"])->group(function () {
    Route::delete("settings/profile", [ProfileController::class, "destroy"])->name("app.profile.destroy");

    Route::get("settings/security", [SecurityController::class, "edit"])
        ->middleware(RequirePassword::class)
        ->name("app.security.edit");

    Route::put("settings/password", [SecurityController::class, "update"])
        ->middleware("throttle:6,1")
        ->name("app.user-password.update");

    Route::inertia("settings/appearance", "settings/appearance")->name("app.appearance.edit");
});

Route::get(".well-known/passkey-endpoints", function () {
    return response()->json([
        "enroll" => route("app.security.edit"),
        "manage" => route("app.security.edit"),
    ]);
})->name("well-known.passkeys");

Route::prefix("/digests")->group(function () {
    Route::get("/sample", [DigestController::class, "sample"])->name("app.digests.sample");
});

Route::prefix("/discover")->group(function () {
    Route::get("/", [DiscoverController::class, "index"])->name("app.discover.index");
});

Route::prefix("/integrations")->group(function () {
    Route::get("/", [IntegrationController::class, "index"])->name("app.integrations.index");
    Route::get("/edit", [IntegrationController::class, "edit"])->name("app.integrations.edit");
});

Route::prefix("/data")->group(function () {
    Route::get("/edit", [DataController::class, "edit"])->name("app.data.edit");
});
