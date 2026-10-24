<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class SitemapController extends Controller
{
    /**
     * Route names left off the sitemap page because they belong to dev tools or the framework
     *
     * @var array<int, string>
     */
    private const array HIDDEN_ROUTES = ["boost.*", "storage.*"];

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
            ->view("pages.sitemap-xml", ["urls" => $urls])
            ->header("Content-Type", "application/xml; charset=UTF-8");
    }

    /**
     * Render the sitemap page listing every named route of the application by category
     */
    public function show(): View
    {
        $remaining = $this->routes();

        $sections = collect($this->sections())->map(function (array $section) use (&$remaining): array {
            $groups = collect($section["groups"])->map(function (array $group) use (&$remaining): array {
                [$matched, $remaining] = $remaining->partition(fn (RoutingRoute $route): bool => Str::is($group["routes"], $route->getName())
                    && ! Str::is($group["except"] ?? [], $route->getName()));

                return ["title" => $group["title"], "routes" => $this->entries($matched)];
            })->filter(fn (array $group): bool => $group["routes"] !== [])->values()->all();

            return [...$section, "groups" => $groups];
        });

        if ($remaining->isNotEmpty()) {
            $sections->push([
                "title" => "Other",
                "description" => "Routes that don’t belong to a category yet.",
                "groups" => [["title" => null, "routes" => $this->entries($remaining)]],
            ]);
        }

        return view("pages.sitemap", ["sections" => $sections]);
    }

    /**
     * Get the sitemap sections, their subsections and the route name patterns they collect
     *
     * @return array<int, array{title: string, description: string, groups: array<int, array{title: ?string, routes: array<int, string>, except?: array<int, string>}>}>
     */
    private function sections(): array
    {
        $feedsAndFiles = ["site.sitemap.index", "site.changelog.feed", "site.robots.index", "well-known.*"];
        $settings = ["app.profile.*", "app.security.*", "app.appearance.*", "app.user-password.*"];

        return [
            [
                "title" => "Marketing",
                "description" => "Public pages anyone can visit.",
                "groups" => [
                    ["title" => "Pages", "routes" => ["site.*"], "except" => $feedsAndFiles],
                    ["title" => "Feeds & files", "routes" => $feedsAndFiles],
                ],
            ],
            [
                "title" => "Authentication",
                "description" => "Signing in, signing up and confirming who you are.",
                "groups" => [
                    [
                        "title" => "Sign in & sign up",
                        "routes" => ["login", "login.*", "logout", "register", "register.*", "two-factor.login", "two-factor.login.*", "passkey.login", "passkey.login-*"],
                    ],
                    ["title" => "Passwords", "routes" => ["password.*"]],
                    ["title" => "Email verification", "routes" => ["verification.*"]],
                ],
            ],
            [
                "title" => "Application",
                "description" => "Your digests, sources, data and account.",
                "groups" => [
                    ["title" => "Workspace", "routes" => ["app.*"], "except" => $settings],
                    ["title" => "Settings", "routes" => $settings],
                    ["title" => "Two-factor & passkeys", "routes" => ["two-factor.*", "passkey.*"]],
                ],
            ],
        ];
    }

    /**
     * Get every named route that belongs on the sitemap page
     *
     * @return Collection<int, RoutingRoute>
     */
    private function routes(): Collection
    {
        return collect(Route::getRoutes()->getRoutes())
            ->filter(fn (RoutingRoute $route): bool => $route->getName() !== null && ! Str::is(self::HIDDEN_ROUTES, $route->getName()))
            ->values();
    }

    /**
     * Describe the routes for the sitemap page, one entry per path with all of its methods, sorted by path
     *
     * @param  Collection<int, RoutingRoute>  $routes
     * @return array<int, array{path: string, names: array<int, string>, methods: array<int, string>, url: ?string, access: array<int, string>}>
     */
    private function entries(Collection $routes): array
    {
        $methodOrder = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];

        return $routes
            ->groupBy(fn (RoutingRoute $route): string => "/".ltrim($route->uri(), "/"))
            ->map(function (Collection $routes, string $path) use ($methodOrder): array {
                $openable = $routes->first(fn (RoutingRoute $route): bool => in_array("GET", $route->methods()) && $route->parameterNames() === []);

                return [
                    "path" => $path,
                    "names" => $routes->map(fn (RoutingRoute $route): string => $route->getName())->all(),
                    "methods" => $routes
                        ->flatMap(fn (RoutingRoute $route): array => $route->methods())
                        ->reject(fn (string $method): bool => $method === "HEAD")
                        ->unique()
                        ->sortBy(fn (string $method): int|false => array_search($method, $methodOrder))
                        ->values()
                        ->all(),
                    "url" => $openable ? route($openable->getName()) : null,
                    "access" => $routes->map(fn (RoutingRoute $route): string => $this->access($route))->unique()->values()->all(),
                ];
            })
            ->sortKeys()
            ->values()
            ->all();
    }

    /**
     * Determine who can use the route from its middleware
     */
    private function access(RoutingRoute $route): string
    {
        $uses = fn (string $prefix): bool => collect($route->gatherMiddleware())
            ->contains(fn (string $entry): bool => $entry === $prefix || str_starts_with($entry, $prefix.":"));

        return match (true) {
            $uses("password.confirm") || $uses(RequirePassword::class) => "Protected",
            $uses("auth") => "Private",
            $uses("guest") => "Guest",
            default => "Public",
        };
    }
}
