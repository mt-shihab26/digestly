<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class RobotsController extends Controller
{
    /**
     * Render robots.txt with a link to the sitemap
     */
    public function index(): Response
    {
        $lines = [
            "User-agent: *",
            "Disallow:",
            "",
            "Sitemap: ".route("site.sitemap.index"),
        ];

        return response(implode("\n", $lines)."\n")->header("Content-Type", "text/plain; charset=UTF-8");
    }
}
