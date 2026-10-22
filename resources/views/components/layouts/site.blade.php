@props(["title" => "", "description" => ""])

<!doctype html>
<html lang="en" class="h-full scroll-smooth">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $description }}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
        @theme {
            --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }
    </style>
</head>
<body class="bg-white font-sans text-gray-900 antialiased">
    <header class="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
        <input type="checkbox" id="pub-toggle" class="peer sr-only" />
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="{{ route('site.home') }}" class="flex items-center gap-2.5 text-gray-900">
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
                    class="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >Features</a
                ><a href="{{ route('site.home') }}#how" class="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >How it works</a
                ><a
                    href="{{ route('site.pricing.index') }}"
                    class="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >Pricing</a
                ><a href="{{ route('site.home') }}#faq" class="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >FAQ</a
                ><a href="{{ route('site.help.index') }}" class="text-sm font-medium text-gray-600 hover:text-gray-900"
                    >Help</a>
            </nav>
            <div class="hidden items-center gap-3 md:flex">
                <a href="{{ route('login') }}" class="text-sm font-semibold text-gray-700 hover:text-gray-900"
                    >Sign in</a>
                <a
                    href="{{ route('register') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none active:bg-indigo-700"
                >Get started free</a>
            </div>
            <label
                for="pub-toggle"
                class="cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                aria-label="Menu"
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
        <div class="hidden border-t border-gray-100 bg-white px-4 py-4 peer-checked:block md:peer-checked:hidden">
            <div class="space-y-1">
                <a
                    href="{{ route('site.home') }}#features"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >Features</a>
                <a
                    href="{{ route('site.home') }}#how"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >How it works</a>
                <a
                    href="{{ route('site.pricing.index') }}"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >Pricing</a>
                <a
                    href="{{ route('site.help.index') }}"
                    class="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                >Help</a>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3">
                <a
                    href="{{ route('login') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    >Sign in</a
                ><a
                    href="{{ route('register') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none active:bg-indigo-700"
                    >Get started</a>
            </div>
        </div>
    </header>

    {{ $slot }}

    <footer class="border-t border-gray-200 bg-white">
        <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div class="grid gap-10 md:grid-cols-6">
                <div class="md:col-span-2">
                    <a href="{{ route('site.home') }}" class="flex items-center gap-2.5 text-gray-900">
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
                    <p class="mt-4 max-w-xs text-sm text-gray-600">
                        One calm email a day with everything worth reading from the feeds and newsletters you follow.
                    </p>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Product</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a
                                href="{{ route('site.home') }}#features"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Features</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.pricing.index') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Pricing</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.discover.index') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Discover feeds</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.digests.sample') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Sample digest</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Resources</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a href="{{ route('site.help.index') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >Help center</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('app.integrations.edit') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >API</a>
                        </li>
                        <li>
                            <a href="{{ route('app.data.edit') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >Import OPML</a>
                        </li>
                        <li>
                            <a href="{{ route('site.home') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >Status</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Company</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a href="{{ route('site.home') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >About</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.help.index') }}#contact"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Contact</a>
                        </li>
                        <li>
                            <a href="{{ route('login') }}" class="text-sm text-gray-600 hover:text-gray-900">Sign in</a>
                        </li>
                        <li>
                            <a href="{{ route('register') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >Sign up</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-gray-900">Legal</h3>
                    <ul class="mt-4 space-y-3">
                        <li>
                            <a
                                href="{{ route('site.privacy.index') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Privacy</a>
                        </li>
                        <li>
                            <a href="{{ route('site.terms.index') }}" class="text-sm text-gray-600 hover:text-gray-900"
                                >Terms</a>
                        </li>
                        <li>
                            <a
                                href="{{ route('site.unsubscribe.index') }}"
                                class="text-sm text-gray-600 hover:text-gray-900"
                            >Unsubscribe</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
                <p class="text-sm text-gray-500">© 2026 Digestly. All rights reserved.</p>
                <p class="text-sm text-gray-500">Built with <a href="https://laravel.com" target="_blank" rel="noopener" class="text-gray-600 hover:text-gray-900">Laravel</a> &amp; <a href="https://react.dev" target="_blank" rel="noopener" class="text-gray-600 hover:text-gray-900">React</a> by <a href="https://developershihab.com/" target="_blank" rel="noopener" class="text-gray-600 hover:text-gray-900">Shihab Mahamud</a>.</p>
            </div>
        </div>
    </footer>
</body>
</html>
