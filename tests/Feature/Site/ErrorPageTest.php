<?php

test("missing pages render the custom 404 page", function () {
    $response = $this->get("/this-page-does-not-exist");

    $response->assertNotFound();
    $response->assertSee("Page not found");
    $response->assertSee(route("site.help.index"), false);
});
