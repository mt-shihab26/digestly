<?php

use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test("guests are redirected to the login page", function () {
    $response = $this->get(route("app.onboarding.index"));

    $response->assertRedirect(route("login"));
});

test("users see topics, recommended feeds and timezones to pick from", function () {
    $response = $this->actingAs(User::factory()->create())->get(route("app.onboarding.index"));

    $response->assertInertia(fn (Assert $page) => $page
        ->component("app/onboarding")
        ->has("topics.0", fn (Assert $topic) => $topic->hasAll(["id", "name", "color"]))
        ->has("feeds.0", fn (Assert $feed) => $feed->hasAll(["id", "name", "domain", "frequency"]))
        ->where("timezones", fn ($timezones) => collect($timezones)->contains("UTC")));
});
