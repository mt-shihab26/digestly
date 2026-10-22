@props(["code", "title", "message"])

<x-layouts.site :title="$title.' - Digestly'" :description="$message">
    <section class="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-16 dark:bg-gray-900">
        <div class="max-w-md text-center">
            <span
                class="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-7"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    /></svg
            ></span>
            <p class="mt-6 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ $code }}</p>
            <h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{{ $title }}</h1>
            <p class="mt-3 text-gray-600 dark:text-gray-400">{{ $message }}</p>
            <div class="mt-8 flex justify-center gap-3">
                <a
                    href="{{ route('site.home') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 hover:underline focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none active:bg-indigo-700 dark:focus:ring-offset-gray-950"
                    >Back to home</a
                ><a
                    href="{{ route('site.help.index') }}"
                    class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:underline focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
                    >Get help</a>
            </div>
        </div>
    </section>
</x-layouts.site>
