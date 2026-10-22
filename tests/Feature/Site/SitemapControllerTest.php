<?php

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
