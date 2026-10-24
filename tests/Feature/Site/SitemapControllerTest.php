<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

test("sitemap lists every public page as xml", function () {
    $response = $this->get(route("site.sitemap.index"));

    $response->assertHeader("Content-Type", "application/xml; charset=UTF-8");
    $response->assertSee("<loc>".route("site.home")."</loc>", false);
    $response->assertSee("<loc>".route("site.pricing.index")."</loc>", false);
    $response->assertSee("<loc>".route("site.help.index")."</loc>", false);
    $response->assertSee("<loc>".route("site.changelog.index")."</loc>", false);
    $response->assertSee("<loc>".route("site.privacy.index")."</loc>", false);
    $response->assertSee("<loc>".route("site.terms.index")."</loc>", false);
});

test("sitemap leaves out the unsubscribe page", function () {
    $response = $this->get(route("site.sitemap.index"));

    $response->assertDontSee(route("site.unsubscribe.index"), false);
});

test("sitemap page groups routes by category with their access level", function () {
    $response = $this->get(route("site.sitemap.show"));

    $response->assertOk();
    $response->assertSeeInOrder([
        "Marketing", "Pages", "Feeds &amp; files",
        "Authentication", "Sign in &amp; sign up", "Passwords", "Email verification",
        "Application", "Workspace", "Settings", "Two-factor &amp; passkeys",
    ], false);
    $response->assertDontSee(">Other<", false);
    $response->assertSee('href="'.route("app.dashboard").'"', false);
    $response->assertSeeInOrder(["/pricing", "Public"]);
    $response->assertSeeInOrder(["/login", "Guest"]);
    $response->assertSeeInOrder(["/dashboard", "Private"]);
    $response->assertSeeInOrder(["/settings/security", "Protected"]);
});

test("sitemap page lists every named route, including ones without a link", function () {
    $response = $this->get(route("site.sitemap.show"));

    collect(Route::getRoutes()->getRoutes())
        ->map(fn ($route) => $route->getName())
        ->filter()
        ->reject(fn (string $name) => Str::is(["boost.*", "storage.*"], $name))
        ->each(fn (string $name) => $response->assertSee($name));

    $response->assertSee("/email/verify/{id}/{hash}");
    $response->assertDontSee('href="'.url("/logout").'"', false);
});
