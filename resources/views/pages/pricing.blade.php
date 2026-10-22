<x-layouts.site
    title="Pricing · Digestly"
    description="Digestly turns the feeds and newsletters you follow into one calm daily email digest."
>
    <section class="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    Simple pricing for calm readers
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    Start free. Upgrade when you need more feeds and smarter tools.
                </p>
                <div class="mt-8 inline-flex rounded-full bg-white p-1 ring-1 ring-gray-200">
                    <span class="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white">Monthly</span
                    ><span class="px-4 py-1.5 text-sm font-medium text-gray-600"
                        >Yearly <span class="text-green-600">−20%</span></span>
                </div>
            </div>
            <div class="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
                <div class="relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900">Free</h3>
                    <p class="mt-2 text-sm text-gray-500">For casual readers getting started.</p>
                    <p class="mt-6 flex items-baseline gap-1">
                        <span class="text-4xl font-extrabold tracking-tight text-gray-900">$0</span
                        ><span class="text-sm text-gray-500">forever</span>
                    </p>
                    <a
                        href="{{ route('register') }}"
                        class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    >Start free</a>
                    <ul class="mt-8 space-y-3">
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Up to 25 feeds
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Daily email digest
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Folders &amp; read-later
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >OPML import / export
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >30-day archive
                        </li>
                    </ul>
                </div>
                <div class="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-2 ring-indigo-600">
                    <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
                    <h3 class="text-lg font-semibold text-gray-900">Pro</h3>
                    <p class="mt-2 text-sm text-gray-500">For power readers who want it all.</p>
                    <p class="mt-6 flex items-baseline gap-1">
                        <span class="text-4xl font-extrabold tracking-tight text-gray-900">$6</span
                        ><span class="text-sm text-gray-500">/ month</span>
                    </p>
                    <a
                        href="{{ route('register') }}"
                        class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none active:bg-indigo-700"
                    >Go Pro</a>
                    <ul class="mt-8 space-y-3">
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Unlimited feeds
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >AI summaries &amp; key takeaways
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Daily, weekly or weekdays
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Rules, mutes &amp; instant alerts
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Newsletter inbox (3 addresses)
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >API &amp; webhooks
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >1-year archive
                        </li>
                    </ul>
                </div>
                <div class="relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900">Team</h3>
                    <p class="mt-2 text-sm text-gray-500">Share curated digests with your team.</p>
                    <p class="mt-6 flex items-baseline gap-1">
                        <span class="text-4xl font-extrabold tracking-tight text-gray-900">$18</span
                        ><span class="text-sm text-gray-500">/ month</span>
                    </p>
                    <a
                        href="/help#contact"
                        class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    >Contact sales</a>
                    <ul class="mt-8 space-y-3">
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Everything in Pro
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Up to 10 seats
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Shared folders &amp; digests
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Slack / Teams delivery
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Unlimited archive
                        </li>
                        <li class="flex gap-3 text-sm text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 shrink-0 text-indigo-600"
                                aria-hidden="true"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                            >Priority support
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <h2 class="text-2xl font-bold text-gray-900">Compare plans</h2>
        <div class="mt-6 overflow-x-auto rounded-2xl bg-white p-4 ring-1 ring-gray-200">
            <table class="w-full min-w-[32rem]">
                <thead>
                    <tr>
                        <th></th>
                        <th class="px-4 pb-3 text-center text-sm font-semibold text-gray-900">Free</th>
                        <th class="px-4 pb-3 text-center text-sm font-semibold text-indigo-700">Pro</th>
                        <th class="px-4 pb-3 text-center text-sm font-semibold text-gray-900">Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Feeds</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">25</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">Unlimited</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Unlimited</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Digest frequency</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Daily</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">
                            Daily, weekly, weekdays
                        </td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Custom + multiple digests</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">AI summaries</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">—</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">✓</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">✓</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Newsletter inbox</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">1 address</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">3 addresses</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Unlimited</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Rules & filters</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">3</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">Unlimited</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Unlimited</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Instant alerts</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">—</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">✓</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">✓</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Team sharing</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">—</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">—</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Up to 10 seats</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">API & webhooks</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">—</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">✓</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">✓</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Archive history</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">30 days</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">1 year</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Unlimited</td>
                    </tr>
                    <tr class="border-t border-gray-100">
                        <th class="py-3.5 pr-4 text-left text-sm font-medium text-gray-900">Support</th>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Community</td>
                        <td class="px-4 py-3.5 text-center text-sm font-medium text-indigo-700">Email</td>
                        <td class="px-4 py-3.5 text-center text-sm text-gray-600">Priority</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</x-layouts.site>
