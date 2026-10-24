<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Render the sitemap page listing every route of the application by category
     */
    public function index(): View
    {
        $sections = collect($this->sections())->map(fn (array $section): array => [
            ...$section,
            "groups" => collect($section["groups"])->map(fn (array $group): array => [
                ...$group,
                "routes" => collect($group["routes"])->map(fn (array $route): array => [
                    ...$route,
                    "url" => $route["link"] ? route($route["link"]) : null,
                ])->all(),
            ])->all(),
        ]);

        return view("pages.sitemap", ["sections" => $sections]);
    }

    /**
     * Render the XML sitemap of public pages
     */
    public function xml(): Response
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
     * Get every route of the application grouped into sections and subsections.
     * `link` is the route name to link to, or null when the route can't be opened directly in the browser.
     *
     * @return array<int, array{title: string, description: string, groups: array<int, array{title: string, routes: array<int, array{path: string, names: array<int, string>, methods: array<int, string>, access: string, link: ?string}>}>}>
     */
    private function sections(): array
    {
        return [
            [
                "title" => "Marketing",
                "description" => "Public pages anyone can visit.",
                "groups" => [
                    [
                        "title" => "Pages",
                        "routes" => [
                            [
                                "path" => "/",
                                "names" => ["site.home"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.home",
                            ],
                            [
                                "path" => "/changelog",
                                "names" => ["site.changelog.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.changelog.index",
                            ],
                            [
                                "path" => "/help",
                                "names" => ["site.help.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.help.index",
                            ],
                            [
                                "path" => "/pricing",
                                "names" => ["site.pricing.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.pricing.index",
                            ],
                            [
                                "path" => "/privacy",
                                "names" => ["site.privacy.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.privacy.index",
                            ],
                            [
                                "path" => "/sitemap",
                                "names" => ["site.sitemap.show"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.sitemap.show",
                            ],
                            [
                                "path" => "/terms",
                                "names" => ["site.terms.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.terms.index",
                            ],
                            [
                                "path" => "/unsubscribe",
                                "names" => ["site.unsubscribe.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.unsubscribe.index",
                            ],
                        ],
                    ],
                    [
                        "title" => "Feeds & files",
                        "routes" => [
                            [
                                "path" => "/.well-known/passkey-endpoints",
                                "names" => ["well-known.passkeys"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "well-known.passkeys",
                            ],
                            [
                                "path" => "/.well-known/security.txt",
                                "names" => ["well-known.security"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "well-known.security",
                            ],
                            [
                                "path" => "/changelog.xml",
                                "names" => ["site.changelog.feed"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.changelog.feed",
                            ],
                            [
                                "path" => "/robots.txt",
                                "names" => ["site.robots.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.robots.index",
                            ],
                            [
                                "path" => "/sitemap.xml",
                                "names" => ["site.sitemap.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "site.sitemap.index",
                            ],
                        ],
                    ],
                ],
            ],
            [
                "title" => "Authentication",
                "description" => "Signing in, signing up and confirming who you are.",
                "groups" => [
                    [
                        "title" => "Sign in & sign up",
                        "routes" => [
                            [
                                "path" => "/login",
                                "names" => ["login", "login.store"],
                                "methods" => ["GET", "POST"],
                                "access" => "Guest",
                                "link" => "login",
                            ],
                            [
                                "path" => "/logout",
                                "names" => ["logout"],
                                "methods" => ["POST"],
                                "access" => "Private",
                                "link" => null,
                            ],
                            [
                                "path" => "/passkeys/login",
                                "names" => ["passkey.login"],
                                "methods" => ["POST"],
                                "access" => "Guest",
                                "link" => null,
                            ],
                            [
                                "path" => "/passkeys/login/options",
                                "names" => ["passkey.login-options"],
                                "methods" => ["GET"],
                                "access" => "Guest",
                                "link" => "passkey.login-options",
                            ],
                            [
                                "path" => "/register",
                                "names" => ["register", "register.store"],
                                "methods" => ["GET", "POST"],
                                "access" => "Guest",
                                "link" => "register",
                            ],
                            [
                                "path" => "/two-factor-challenge",
                                "names" => ["two-factor.login", "two-factor.login.store"],
                                "methods" => ["GET", "POST"],
                                "access" => "Guest",
                                "link" => "two-factor.login",
                            ],
                        ],
                    ],
                    [
                        "title" => "Passwords",
                        "routes" => [
                            [
                                "path" => "/forgot-password",
                                "names" => ["password.request", "password.email"],
                                "methods" => ["GET", "POST"],
                                "access" => "Guest",
                                "link" => "password.request",
                            ],
                            [
                                "path" => "/reset-password",
                                "names" => ["password.update"],
                                "methods" => ["POST"],
                                "access" => "Guest",
                                "link" => null,
                            ],
                            [
                                "path" => "/reset-password/{token}",
                                "names" => ["password.reset"],
                                "methods" => ["GET"],
                                "access" => "Guest",
                                "link" => null,
                            ],
                            [
                                "path" => "/user/confirm-password",
                                "names" => ["password.confirm", "password.confirm.store"],
                                "methods" => ["GET", "POST"],
                                "access" => "Private",
                                "link" => "password.confirm",
                            ],
                            [
                                "path" => "/user/confirmed-password-status",
                                "names" => ["password.confirmation"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "password.confirmation",
                            ],
                        ],
                    ],
                    [
                        "title" => "Email verification",
                        "routes" => [
                            [
                                "path" => "/email/verification-notification",
                                "names" => ["verification.send"],
                                "methods" => ["POST"],
                                "access" => "Private",
                                "link" => null,
                            ],
                            [
                                "path" => "/email/verify",
                                "names" => ["verification.notice"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "verification.notice",
                            ],
                            [
                                "path" => "/email/verify/{id}/{hash}",
                                "names" => ["verification.verify"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => null,
                            ],
                        ],
                    ],
                ],
            ],
            [
                "title" => "Application",
                "description" => "Your digests, sources, data and account.",
                "groups" => [
                    [
                        "title" => "Workspace",
                        "routes" => [
                            [
                                "path" => "/onboarding",
                                "names" => ["app.onboarding.index"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "app.onboarding.index",
                            ],
                            [
                                "path" => "/dashboard",
                                "names" => ["app.dashboard"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "app.dashboard",
                            ],
                            [
                                "path" => "/data/edit",
                                "names" => ["app.data.edit"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "app.data.edit",
                            ],
                            [
                                "path" => "/digests/sample",
                                "names" => ["app.digests.sample"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "app.digests.sample",
                            ],
                            [
                                "path" => "/discover",
                                "names" => ["app.discover.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "app.discover.index",
                            ],
                            [
                                "path" => "/integrations",
                                "names" => ["app.integrations.index"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "app.integrations.index",
                            ],
                            [
                                "path" => "/integrations/edit",
                                "names" => ["app.integrations.edit"],
                                "methods" => ["GET"],
                                "access" => "Public",
                                "link" => "app.integrations.edit",
                            ],
                        ],
                    ],
                    [
                        "title" => "Settings",
                        "routes" => [
                            [
                                "path" => "/settings/appearance",
                                "names" => ["app.appearance.edit"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "app.appearance.edit",
                            ],
                            [
                                "path" => "/settings/password",
                                "names" => ["app.user-password.update"],
                                "methods" => ["PUT"],
                                "access" => "Private",
                                "link" => null,
                            ],
                            [
                                "path" => "/settings/profile",
                                "names" => ["app.profile.edit", "app.profile.update", "app.profile.destroy"],
                                "methods" => ["GET", "PATCH", "DELETE"],
                                "access" => "Private",
                                "link" => "app.profile.edit",
                            ],
                            [
                                "path" => "/settings/security",
                                "names" => ["app.security.edit"],
                                "methods" => ["GET"],
                                "access" => "Protected",
                                "link" => "app.security.edit",
                            ],
                        ],
                    ],
                    [
                        "title" => "Two-factor & passkeys",
                        "routes" => [
                            [
                                "path" => "/passkeys/confirm",
                                "names" => ["passkey.confirm"],
                                "methods" => ["POST"],
                                "access" => "Private",
                                "link" => null,
                            ],
                            [
                                "path" => "/passkeys/confirm/options",
                                "names" => ["passkey.confirm-options"],
                                "methods" => ["GET"],
                                "access" => "Private",
                                "link" => "passkey.confirm-options",
                            ],
                            [
                                "path" => "/user/confirmed-two-factor-authentication",
                                "names" => ["two-factor.confirm"],
                                "methods" => ["POST"],
                                "access" => "Protected",
                                "link" => null,
                            ],
                            [
                                "path" => "/user/passkeys",
                                "names" => ["passkey.store"],
                                "methods" => ["POST"],
                                "access" => "Protected",
                                "link" => null,
                            ],
                            [
                                "path" => "/user/passkeys/options",
                                "names" => ["passkey.registration-options"],
                                "methods" => ["GET"],
                                "access" => "Protected",
                                "link" => "passkey.registration-options",
                            ],
                            [
                                "path" => "/user/passkeys/{passkey}",
                                "names" => ["passkey.destroy"],
                                "methods" => ["DELETE"],
                                "access" => "Protected",
                                "link" => null,
                            ],
                            [
                                "path" => "/user/two-factor-authentication",
                                "names" => ["two-factor.enable", "two-factor.disable"],
                                "methods" => ["POST", "DELETE"],
                                "access" => "Protected",
                                "link" => null,
                            ],
                            [
                                "path" => "/user/two-factor-qr-code",
                                "names" => ["two-factor.qr-code"],
                                "methods" => ["GET"],
                                "access" => "Protected",
                                "link" => "two-factor.qr-code",
                            ],
                            [
                                "path" => "/user/two-factor-recovery-codes",
                                "names" => ["two-factor.recovery-codes", "two-factor.regenerate-recovery-codes"],
                                "methods" => ["GET", "POST"],
                                "access" => "Protected",
                                "link" => "two-factor.recovery-codes",
                            ],
                            [
                                "path" => "/user/two-factor-secret-key",
                                "names" => ["two-factor.secret-key"],
                                "methods" => ["GET"],
                                "access" => "Protected",
                                "link" => "two-factor.secret-key",
                            ],
                        ],
                    ],
                ],
            ],
        ];
    }
}
