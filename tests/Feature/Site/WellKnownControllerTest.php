<?php

test("passkey endpoints point password managers to the security settings", function () {
    $response = $this->get(route("well-known.passkeys"));

    $response->assertExactJson([
        "enroll" => route("app.security.edit"),
        "manage" => route("app.security.edit"),
    ]);
});

test("security.txt lists the contact and expires one year from today", function () {
    $this->travelTo("2026-10-23 15:30:00");

    $response = $this->get(route("well-known.security"));

    $response->assertHeader("Content-Type", "text/plain; charset=UTF-8");
    expect($response->getContent())->toBe(implode("\n", [
        "Contact: mailto:mt.shihab26@gmail.com",
        "Expires: 2027-10-23T00:00:00Z",
        "Preferred-Languages: en",
        "Canonical: ".route("well-known.security"),
    ])."\n");
});
