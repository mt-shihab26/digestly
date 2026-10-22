@props(["title" => "", "description" => "", "image" => asset("og-image.png")])

<!doctype html>
<html lang="en" class="h-full scroll-smooth">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $description }}" />
    <link rel="canonical" href="{{ url()->current() }}" />
    <meta name="color-scheme" content="light dark" />
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Digestly" />
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:description" content="{{ $description }}" />
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:image" content="{{ $image }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{{ $title }}" />
    <meta name="twitter:description" content="{{ $description }}" />
    <meta name="twitter:image" content="{{ $image }}" />

    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="alternate" type="application/rss+xml" title="Digestly changelog" href="{{ route('site.changelog.feed') }}" />

    <script type="application/ld+json">
        {!! json_encode([
            "@@context" => "https://schema.org",
            "@graph" => [
                [
                    "@type" => "Organization",
                    "name" => "Digestly",
                    "url" => route("site.home"),
                    "logo" => asset("icon-512.png"),
                    "email" => "mt.shihab26@gmail.com",
                ],
                [
                    "@type" => "WebSite",
                    "name" => "Digestly",
                    "url" => route("site.home"),
                ],
            ],
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
    </script>
    @stack("head")

    <script>
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        }
    </script>

    @fonts
    @vite("resources/css/app.css")
</head>
<body id="top" class="bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-white antialiased">
    <a
        href="#content"
        class="sr-only rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >Skip to content</a>
    <header class="group sticky top-0 z-40 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <input type="checkbox" id="pub-toggle" class="peer sr-only" aria-label="Toggle menu" aria-controls="pub-menu" />
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="{{ route('site.home') }}" class="flex items-center gap-2.5 text-gray-900 dark:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span class="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        /></svg
                ></span>
                <span class="text-xl font-bold tracking-tight">Digestly</span></a>
            <nav class="hidden items-center gap-8 md:flex">
                <a
                    href="{{ route('site.home') }}#features"
                    class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Features</a
                ><a href="{{ route('site.home') }}#how" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >How it works</a
                ><a
                    href="{{ route('site.pricing.index') }}"
                    @if (request()->routeIs("site.pricing.index")) aria-current="page" @endif
                    class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline aria-[current=page]:text-gray-900 dark:aria-[current=page]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Pricing</a
                ><a href="{{ route('site.home') }}#faq" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >FAQ</a
                ><a href="{{ route('site.help.index') }}" @if (request()->routeIs("site.help.index")) aria-current="page" @endif class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline aria-[current=page]:text-gray-900 dark:aria-[current=page]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Help</a>
            </nav>
            <div class="hidden items-center gap-3 md:flex">
                <a href="{{ route('login') }}" class="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Sign in</a>
                <a
                    href="{{ route('register') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 focus:outline-none active:bg-indigo-700 hover:underline"
                >Get started free</a>
            </div>
            <label
                for="pub-toggle"
                class="cursor-pointer rounded-lg p-2 text-gray-600 dark:text-gray-400 group-has-[#pub-toggle:focus-visible]:ring-2 group-has-[#pub-toggle:focus-visible]:ring-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
                aria-hidden="true"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    /></svg
            ></label>
        </div>
        <div id="pub-menu" class="hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 peer-checked:block md:peer-checked:hidden">
            <div class="space-y-1">
                <a
                    href="{{ route('site.home') }}#features"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Features</a>
                <a
                    href="{{ route('site.home') }}#how"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >How it works</a>
                <a
                    href="{{ route('site.pricing.index') }}"
                    @if (request()->routeIs("site.pricing.index")) aria-current="page" @endif
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:underline aria-[current=page]:bg-gray-50 dark:aria-[current=page]:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Pricing</a>
                <a
                    href="{{ route('site.help.index') }}"
                    @if (request()->routeIs("site.help.index")) aria-current="page" @endif
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:underline aria-[current=page]:bg-gray-50 dark:aria-[current=page]:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Help</a>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3">
                <a
                    href="{{ route('login') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 focus:outline-none hover:underline"
                    >Sign in</a
                ><a
                    href="{{ route('register') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 focus:outline-none active:bg-indigo-700 hover:underline"
                    >Get started</a>
            </div>
        </div>
    </header>

    <main id="content" tabindex="-1" class="outline-none">
        {{ $slot }}
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div class="grid gap-10 md:grid-cols-6">
                <div class="md:col-span-2">
                    <a href="{{ route('site.home') }}" class="flex items-center gap-2.5 text-gray-900 dark:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span
                            class="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                /></svg
                        ></span>
                        <span class="text-xl font-bold tracking-tight">Digestly</span></a>
                    <p class="mt-4 max-w-xs text-sm text-gray-600 dark:text-gray-400">
                        One calm email a day with everything worth reading from the feeds and newsletters you follow.
                    </p>
                    <a
                        href="mailto:mt.shihab26@gmail.com"
                        class="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >mt.shihab26@gmail.com</a>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Product</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a
                                href="{{ route('site.home') }}#features"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Features</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.pricing.index') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Pricing</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.discover.index') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Discover feeds</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.digests.sample') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Sample digest</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Resources</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a href="{{ route('site.help.index') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Help center</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.changelog.index') }}"
                                @if (request()->routeIs("site.changelog.index")) aria-current="page" @endif
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline aria-[current=page]:text-gray-900 dark:aria-[current=page]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Changelog</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.integrations.edit') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >API</a>
                        </li>
                        <li>
                            <a href="{{ route('app.data.edit') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Import OPML</a>
                        </li>
                        <li>
                            <a href="{{ route('site.home') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Status</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a href="{{ route('site.home') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >About</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.help.index') }}#contact"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Contact</a>
                        </li>
                        <li>
                            <a href="{{ route('login') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</a>
                        </li>
                        <li>
                            <a href="{{ route('register') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Sign up</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a
                                href="{{ route('site.privacy.index') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Privacy</a>
                        </li>
                        <li>
                            <a href="{{ route('site.terms.index') }}" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Terms</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.unsubscribe.index') }}"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Unsubscribe</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 dark:border-gray-800 pt-8 sm:flex-row">
                <p class="text-sm text-gray-500 dark:text-gray-400">© 2026 Digestly. All rights reserved.</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Built with <a href="https://laravel.com" target="_blank" rel="noopener" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Laravel</a> &amp; <a href="https://react.dev" target="_blank" rel="noopener" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">React</a> by <a href="https://developershihab.com/" target="_blank" rel="noopener" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Shihab Mahamud</a>.</p>
            </div>
        </div>
    </footer>

    <a
        href="#top"
        id="back-to-top"
        class="invisible fixed right-4 bottom-4 z-40 flex size-11 items-center justify-center rounded-full bg-indigo-600 text-white opacity-0 shadow-lg transition hover:bg-indigo-500 hover:underline sm:right-6 sm:bottom-6 data-visible:visible data-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        aria-label="Back to top"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
            aria-hidden="true"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg
    ></a>
    <script>
        (function () {
            const button = document.getElementById("back-to-top");
            const toggle = () => button.toggleAttribute("data-visible", window.scrollY > 600);

            window.addEventListener("scroll", toggle, { passive: true });
            toggle();
        })();
    </script>
</body>
</html>
