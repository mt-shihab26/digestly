<?php

use App\Models\User;

test("guests see the sign in and sign up links", function () {
    $response = $this->get(route("site.home"));

    $response->assertSee("Get started free");
    $response->assertSee('href="'.route("login").'"', false);
    $response->assertDontSee("Go to dashboard");
    $response->assertDontSee('action="'.route("logout").'"', false);
});

test("signed in users see the dashboard and log out links", function () {
    $response = $this->actingAs(User::factory()->create())->get(route("site.home"));

    $response->assertSee("Go to dashboard");
    $response->assertSee('action="'.route("logout").'"', false);
    $response->assertDontSee("Get started free");
    $response->assertDontSee('href="'.route("login").'"', false);
});
