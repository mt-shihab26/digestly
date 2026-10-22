<?php

use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\SecurityController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;
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
