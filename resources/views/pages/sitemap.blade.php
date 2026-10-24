<x-layouts.site title="Sitemap - Digestly" description="Every page and route in Digestly, grouped by category.">
    <article class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p class="text-sm font-semibold text-indigo-600">Sitemap</p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Every page in Digestly</h1>
        <p class="mt-3 max-w-2xl leading-7 text-gray-600">
            All the routes of the site and the app, grouped by category. Private routes need you to be signed in,
            and protected routes ask you to confirm your password first. Routes that take a token or only accept form
            submissions are listed without a link. Search engines can use the
            <a
                href="{{ route('site.sitemap.index') }}"
                class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >XML sitemap</a
            >.
        </p>

        <div class="mt-12 grid items-start gap-6 lg:grid-cols-3">
            @foreach ($sections as $section)
                <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 class="text-base font-semibold text-gray-900">
                        {{ $section["title"] }}
                        <span class="text-sm font-normal text-gray-400">
                            · {{ collect($section["groups"])->sum(fn ($group) => count($group["routes"])) }}
                        </span>
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">{{ $section["description"] }}</p>
                    @foreach ($section["groups"] as $group)
                        @if ($group["title"])
                            <h3 class="mt-5 px-3 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                {{ $group["title"] }}
                            </h3>
                        @endif
                        <ul @class(["space-y-1", "mt-2" => $group["title"], "mt-4" => ! $group["title"]])>
                            @foreach ($group["routes"] as $route)
                                <li>
                                    <{{ $route["url"] ? "a" : "div" }}
                                        @if ($route["url"]) href="{{ $route['url'] }}" @endif
                                        @class([
                                            "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-gray-700",
                                            "hover:bg-indigo-50 hover:text-indigo-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" => $route["url"],
                                        ])
                                    >
                                        <span class="min-w-0">
                                            <span class="block truncate font-mono text-xs">{{ $route["path"] }}</span>
                                            <span class="block truncate text-xs text-gray-400">{{ implode(", ", $route["names"]) }}</span>
                                        </span>
                                        <span class="flex shrink-0 items-center gap-1.5">
                                            @foreach ($route["methods"] as $method)
                                                <span
                                                    class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-gray-600"
                                                >{{ $method }}</span>
                                            @endforeach
                                            @foreach ($route["access"] as $access)
                                                <span
                                                    @class([
                                                        "rounded-full px-2 py-0.5 text-xs font-medium",
                                                        "bg-emerald-50 text-emerald-700" => $access === "Public",
                                                        "bg-sky-50 text-sky-700" => $access === "Guest",
                                                        "bg-indigo-50 text-indigo-700" => $access === "Private",
                                                        "bg-amber-50 text-amber-700" => $access === "Protected",
                                                    ])
                                                >{{ $access }}</span>
                                            @endforeach
                                        </span>
                                    </{{ $route["url"] ? "a" : "div" }}>
                                </li>
                            @endforeach
                        </ul>
                    @endforeach
                </section>
            @endforeach
        </div>
    </article>
</x-layouts.site>
