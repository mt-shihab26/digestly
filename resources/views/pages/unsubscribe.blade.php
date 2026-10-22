<x-layouts.site
    title="Unsubscribe - Digestly"
    description="Digestly turns the feeds and newsletters you follow into one calm daily email digest."
>
    <section class="mx-auto flex min-h-[70vh] max-w-lg items-center px-4 py-16">
        <div class="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
            <span class="flex size-12 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    /></svg
            ></span>
            <h1 class="mt-5 text-2xl font-bold text-gray-900 dark:text-white">Sorry to see you go</h1>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Choose what you’d like to stop receiving at
                <span class="font-medium text-gray-700 dark:text-gray-300">mt.shihab26@gmail.com</span>.
            </p>
            <form class="mt-6 space-y-3">
                <label
                    class="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 has-checked:border-indigo-600 has-checked:bg-indigo-50 dark:has-checked:bg-indigo-500/10"
                    ><input type="radio" name="scope" checked class="mt-1 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500" /><span
                        ><span class="block text-sm font-medium text-gray-900 dark:text-white">Switch to weekly digest</span
                        ><span class="block text-xs text-gray-500 dark:text-gray-400"
                            >Get one email every Sunday instead of daily.</span
                        ></span
                    ></label>
                <label
                    class="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 has-checked:border-indigo-600 has-checked:bg-indigo-50 dark:has-checked:bg-indigo-500/10"
                    ><input type="radio" name="scope" class="mt-1 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500" /><span
                        ><span class="block text-sm font-medium text-gray-900 dark:text-white">Pause for 30 days</span
                        ><span class="block text-xs text-gray-500 dark:text-gray-400">We’ll resume automatically.</span></span
                    ></label>
                <label
                    class="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 has-checked:border-indigo-600 has-checked:bg-indigo-50 dark:has-checked:bg-indigo-500/10"
                    ><input type="radio" name="scope" class="mt-1 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500" /><span
                        ><span class="block text-sm font-medium text-gray-900 dark:text-white">Unsubscribe from all digests</span
                        ><span class="block text-xs text-gray-500 dark:text-gray-400">Your account and reader stay active.</span></span
                    ></label>
                <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300" for="why"
                        >Why are you leaving? <span class="text-gray-400 dark:text-gray-500">(optional)</span></label
                    ><select
                        id="why"
                        class="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-sm text-gray-900 dark:text-white shadow-sm transition outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    >
                        <option>Too many emails</option>
                        <option>Not relevant to me</option>
                        <option>I use another reader</option>
                        <option>Other</option>
                    </select>
                </div>
                <button class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950 focus:outline-none active:bg-indigo-700">
                    Confirm</button
                ><a
                    href="/html/dashboard/dashboard.html"
                    class="block text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Never mind, keep my digest</a>
            </form>
        </div>
    </section>
</x-layouts.site>
