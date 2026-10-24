<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

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
            "site.sitemap.show",
        ])->map(fn (string $name): string => route($name));

        return response()
            ->view("pages.sitemap", ["urls" => $urls])
            ->header("Content-Type", "application/xml; charset=UTF-8");
    }

    /**
     * Render the sitemap page listing every page of the application by category
     */
    public function show(): View
    {
        $sections = collect($this->sections())->map(fn (array $section): array => [
            ...$section,
            "links" => collect($section["links"])->map(fn (string $label, string $name): array => [
                "label" => $label,
                "url" => route($name),
                "path" => "/".ltrim(Route::getRoutes()->getByName($name)->uri(), "/"),
                "access" => $this->access($name),
            ])->values()->all(),
        ]);

        return view("pages.sitemap-page", ["sections" => $sections]);
    }

    /**
     * Get the sitemap sections and the route names they list
     *
     * @return array<int, array{title: string, description: string, links: array<string, string>}>
     */
    private function sections(): array
    {
        return [
            [
                "title" => "Marketing",
                "description" => "Public pages anyone can visit.",
                "links" => [
                    "site.home" => "Home",
                    "site.pricing.index" => "Pricing",
                    "site.help.index" => "Help center",
                    "site.changelog.index" => "Changelog",
                    "site.privacy.index" => "Privacy",
                    "site.terms.index" => "Terms",
                    "site.unsubscribe.index" => "Unsubscribe",
                ],
            ],
            [
                "title" => "Authentication",
                "description" => "Signing in, signing up and confirming who you are.",
                "links" => [
                    "login" => "Log in",
                    "register" => "Sign up",
                    "password.request" => "Forgot password",
                    "verification.notice" => "Verify email",
                    "password.confirm" => "Confirm password",
                ],
            ],
            [
                "title" => "Application",
                "description" => "Your digests, sources and data.",
                "links" => [
                    "app.dashboard" => "Dashboard",
                    "app.discover.index" => "Discover",
                    "app.digests.sample" => "Sample digest",
                    "app.integrations.index" => "Integrations",
                    "app.integrations.edit" => "Edit integrations",
                    "app.data.edit" => "Import & export",
                ],
            ],
            [
                "title" => "Settings",
                "description" => "Manage your account.",
                "links" => [
                    "app.profile.edit" => "Profile",
                    "app.security.edit" => "Security & two-factor",
                    "app.appearance.edit" => "Appearance",
                ],
            ],
            [
                "title" => "Feeds & files",
                "description" => "Machine-readable files for feed readers and crawlers.",
                "links" => [
                    "site.sitemap.index" => "Sitemap (XML)",
                    "site.changelog.feed" => "Changelog RSS feed",
                    "site.robots.index" => "robots.txt",
                    "well-known.security" => "security.txt",
                ],
            ],
        ];
    }

    /**
     * Determine who can open the route from its middleware
     */
    private function access(string $name): string
    {
        $middleware = Route::getRoutes()->getByName($name)->gatherMiddleware();

        $uses = fn (string $prefix): bool => collect($middleware)
            ->contains(fn (string $entry): bool => $entry === $prefix || str_starts_with($entry, $prefix.":"));

        return match (true) {
            $uses("password.confirm") || $uses(RequirePassword::class) => "Protected",
            $uses("auth") => "Private",
            $uses("guest") => "Guest",
            default => "Public",
        };
    }
}
