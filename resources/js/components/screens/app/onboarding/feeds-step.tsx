import type { TOnboardingForm } from "@/components/screens/app/onboarding/onboarding-form";

import { Link } from "@inertiajs/react";

import { toggle } from "@/components/screens/app/onboarding/onboarding-form";

export type TFeed = {
    id: string;
    name: string;
    domain: string;
    frequency: string;
};

export const FeedsStep = ({
    form,
    feeds,
}: {
    form: TOnboardingForm;
    feeds: TFeed[];
}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-foreground">
                Follow a few feeds
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
                Recommended for your interests. You can always change this
                later.
            </p>
            <ul className="mt-4 divide-y divide-border">
                {feeds.map((feed) => (
                    <li key={feed.id} className="flex items-center gap-4 py-4">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-400 to-purple-500 text-sm font-bold text-white shadow-sm">
                            {feed.name.charAt(0)}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-foreground">
                                {feed.name}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                                {feed.domain} · {feed.frequency}
                            </p>
                        </div>
                        <label className="cursor-pointer">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={form.data.feeds.includes(feed.id)}
                                onChange={() =>
                                    form.setData(
                                        "feeds",
                                        toggle(form.data.feeds, feed.id),
                                    )
                                }
                            />
                            <span className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50">
                                {form.data.feeds.includes(feed.id)
                                    ? "Following"
                                    : "Follow"}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
                Already have a list?{" "}
                <Link
                    href={route("app.data.edit")}
                    className="font-medium text-primary hover:underline"
                >
                    Import an OPML file
                </Link>
                .
            </p>
        </>
    );
};
