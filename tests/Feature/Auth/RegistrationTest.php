<?php

use Laravel\Fortify\Features;

beforeEach(function () {
    $this->skipUnlessFortifyHas(Features::registration());
});

test("registration screen can be rendered", function () {
    $response = $this->get(route("register"));

    $response->assertOk();
});

test("new users can register", function () {
    $response = $this->post(route("register.store"), [
        "first_name" => "Test",
        "last_name" => "User",
        "email" => "test@example.com",
        "password" => "password",
        "password_confirmation" => "password",
        "terms" => true,
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route("app.dashboard", absolute: false));
    expect(auth()->user()->name)->toBe("Test User");
});

test("users must accept the terms to register", function () {
    $response = $this->post(route("register.store"), [
        "first_name" => "Test",
        "last_name" => "User",
        "email" => "test@example.com",
        "password" => "password",
        "password_confirmation" => "password",
    ]);

    $response->assertSessionHasErrors("terms");
    $this->assertGuest();
});
