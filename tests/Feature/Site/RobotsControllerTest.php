<?php

test("robots.txt allows crawling and points to the sitemap", function () {
    $response = $this->get(route("site.robots.index"));

    $response->assertHeader("Content-Type", "text/plain; charset=UTF-8");
    expect($response->getContent())->toBe(
        "User-agent: *\nDisallow:\n\nSitemap: ".route("site.sitemap.index")."\n"
    );
});
