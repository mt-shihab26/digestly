<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

class ChangelogController extends Controller
{
    /**
     * Render the public changelog page
     */
    public function index(): View
    {
        return view("pages.changelog", ["entries" => $this->entries()]);
    }

    /**
     * Render the changelog as an RSS feed
     */
    public function feed(): Response
    {
        return response()
            ->view("pages.changelog-feed", ["entries" => $this->entries()])
            ->header("Content-Type", "application/rss+xml; charset=UTF-8");
    }

    /**
     * Get the changelog entries, newest first
     *
     * @return list<array{slug: string, date: string, title: string, changes: list<string>}>
     */
    private function entries(): array
    {
        return [
            [
                "slug" => "public-site-refresh",
                "date" => "2026-10-23",
                "title" => "Public site refresh",
                "changes" => [
                    "Dark mode that follows your system setting.",
                    "Clearer keyboard focus, a skip-to-content link and better screen reader labels.",
                    "Friendly error pages, a sitemap and rich link previews when you share Digestly.",
                    "Expanded Terms of Service and Privacy Policy.",
                    "This changelog, with an RSS feed you can follow in Digestly.",
                ],
            ],
        ];
    }
}
