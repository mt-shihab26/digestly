<?php

test("changelog page renders entries newest first", function () {
    $response = $this->get(route("site.changelog.index"));

    $response->assertSee("Public site refresh");
    $response->assertSee("October 23, 2026");
});

test("changelog feed renders entries as rss", function () {
    $response = $this->get(route("site.changelog.feed"));

    $response->assertHeader("Content-Type", "application/rss+xml; charset=UTF-8");
    $response->assertSee("<title>Public site refresh</title>", false);
    $response->assertSee("<pubDate>Fri, 23 Oct 2026 00:00:00 +0000</pubDate>", false);
    $response->assertSee("<link>".route("site.changelog.index")."#public-site-refresh</link>", false);
});

test("changelog feed escapes change text inside the description", function () {
    $response = $this->get(route("site.changelog.feed"));

    $response->assertSee("&lt;ul&gt;&lt;li&gt;Dark mode that follows your system setting.&lt;/li&gt;", false);
});
