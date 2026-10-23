<x-layouts.site title="Sitemap - Digestly" description="Every page in Digestly, grouped by category.">
    <article class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p class="text-sm font-semibold text-indigo-600">Sitemap</p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Every page in Digestly</h1>
        <p class="mt-3 max-w-2xl leading-7 text-gray-600">
            All the pages of the site and the app, grouped by category. Private pages need you to be signed in,
            and protected pages ask you to confirm your password first. Search engines can use the
            <a
                href="{{ route('site.sitemap.index') }}"
                class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >XML sitemap</a
            >.
        </p>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            @foreach ($sections as $section)
                <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 class="text-base font-semibold text-gray-900">
                        {{ $section["title"] }}
                        <span class="text-sm font-normal text-gray-400">· {{ count($section["links"]) }}</span>
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">{{ $section["description"] }}</p>
                    <ul class="mt-4 space-y-1">
                        @foreach ($section["links"] as $link)
                            <li>
                                <a
                                    href="{{ $link['url'] }}"
                                    class="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <span>{{ $link["label"] }}</span>
                                    <span class="flex shrink-0 items-center gap-2">
                                        <span class="text-xs text-gray-400">{{ $link["path"] }}</span>
                                        <span
                                            @class([
                                                "rounded-full px-2 py-0.5 text-xs font-medium",
                                                "bg-emerald-50 text-emerald-700" => $link["access"] === "Public",
                                                "bg-sky-50 text-sky-700" => $link["access"] === "Guest",
                                                "bg-indigo-50 text-indigo-700" => $link["access"] === "Private",
                                                "bg-amber-50 text-amber-700" => $link["access"] === "Protected",
                                            ])
                                        >{{ $link["access"] }}</span>
                                    </span>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </section>
            @endforeach
        </div>
    </article>
</x-layouts.site>
