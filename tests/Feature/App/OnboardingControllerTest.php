<?php

use App\Enums\DeliveryFrequency;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test("guests are redirected to the login page", function () {
    $response = $this->get(route("app.onboarding.edit"));

    $response->assertRedirect(route("login"));
});

test("users see topics, recommended feeds and timezones to pick from", function () {
    $response = $this->actingAs(User::factory()->create())->get(route("app.onboarding.edit"));

    $response->assertInertia(fn (Assert $page) => $page
        ->component("app/onboarding")
        ->has("topics.0", fn (Assert $topic) => $topic->hasAll(["id", "name", "color"]))
        ->has("feeds.0", fn (Assert $feed) => $feed->hasAll(["id", "name", "domain", "frequency"]))
        ->where("timezones", fn ($timezones) => collect($timezones)->contains("UTC")));
});

test("submitting onboarding with nothing picked asks for every answer", function () {
    $response = $this->actingAs(User::factory()->create())->patch(route("app.onboarding.store"), []);

    $response->assertSessionHasErrors([
        "topics" => "Pick at least one topic.",
        "feeds" => "Follow at least one feed.",
        "frequency",
        "time",
        "timezone",
    ]);
});

test("onboarding rejects topics and feeds that are not on offer", function () {
    $response = $this->actingAs(User::factory()->create())->patch(route("app.onboarding.store"), [
        "topics" => ["not-a-topic"],
        "feeds" => ["not-a-feed"],
    ]);

    $response->assertSessionHasErrors([
        "topics.0" => "One of the selected topics is not available.",
        "feeds.0" => "One of the selected feeds is not available.",
    ]);
});

test("onboarding rejects an invalid delivery schedule", function (string $field, string $value) {
    $response = $this->actingAs(User::factory()->create())->patch(route("app.onboarding.store"), [
        $field => $value,
    ]);

    $response->assertSessionHasErrors($field);
})->with([
    "unknown frequency" => ["frequency", "hourly"],
    "malformed time" => ["time", "7:30pm"],
    "unknown timezone" => ["timezone", "Mars/Olympus"],
]);

test("finishing onboarding saves the picks on the user and goes to the dashboard", function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->patch(route("app.onboarding.store"), [
        "topics" => ["tech", "ai"],
        "feeds" => ["laravel-news"],
        "frequency" => "weekdays",
        "time" => "08:15",
        "timezone" => "Asia/Dhaka",
    ]);

    $response->assertRedirect(route("app.dashboard"));
    expect($user->refresh())
        ->topics->toBe(["tech", "ai"])
        ->feeds->toBe(["laravel-news"])
        ->digest_frequency->toBe(DeliveryFrequency::Weekdays)
        ->digest_time->toStartWith("08:15")
        ->timezone->toBe("Asia/Dhaka")
        ->onboarded_at->not->toBeNull();
});
