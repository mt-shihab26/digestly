<x-layouts.site
    title="Changelog - Digestly"
    description="New features and improvements in Digestly, newest first."
>
    <article class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Changelog</p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">What’s new in Digestly</h1>
        <p class="mt-3 leading-7 text-gray-600 dark:text-gray-400">
            New features and improvements, newest first. Follow along with the
            <a
                href="{{ route('site.changelog.feed') }}"
                class="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >RSS feed</a>.
        </p>
        <ol class="mt-12 space-y-12 border-l border-gray-200 dark:border-gray-800 pl-6">
            @foreach ($entries as $entry)
                <li id="{{ $entry['slug'] }}" class="relative scroll-mt-24">
                    <span class="absolute top-1.5 -left-[1.95rem] size-3 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-gray-950"></span>
                    <time datetime="{{ $entry['date'] }}" class="text-sm text-gray-500 dark:text-gray-400">
                        {{ \Illuminate\Support\Carbon::parse($entry['date'])->format('F j, Y') }}
                    </time>
                    <h2 class="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{{ $entry['title'] }}</h2>
                    <ul class="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600 dark:text-gray-400">
                        @foreach ($entry['changes'] as $change)
                            <li>{{ $change }}</li>
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ol>
    </article>
</x-layouts.site>
