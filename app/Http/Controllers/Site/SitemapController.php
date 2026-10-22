<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Render the XML sitemap of public pages
     */
    public function index(): Response
    {
        $urls = collect([
            "site.home",
            "site.pricing.index",
            "site.help.index",
            "site.changelog.index",
            "site.privacy.index",
            "site.terms.index",
        ])->map(fn (string $name): string => route($name));

        return response()
            ->view("pages.sitemap", ["urls" => $urls])
            ->header("Content-Type", "application/xml; charset=UTF-8");
    }
}
