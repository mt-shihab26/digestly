import { Link, router } from "@inertiajs/react";
import { Check } from "lucide-react";
import { Fragment, useState } from "react";

import { RootLayout } from "@/components/layouts/root-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select";

import { APP_NAME } from "@/lib/env";
import { cn } from "@/lib/utils";

import logoIcon from "@/assets/icons/logo-icon.svg";

const STEPS = ["Interests", "Follow feeds", "Delivery", "Done"];

const FREQUENCIES = [
    { value: "daily", label: "Every day" },
    { value: "weekdays", label: "Weekdays only" },
    { value: "weekly", label: "Weekly (Sunday)" },
];

const toggle = (values: string[], value: string): string[] =>
    values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];

const Onboarding = ({
    topics,
    feeds,
    timezones,
}: {
    topics: { id: string; name: string; color: string }[];
    feeds: { id: string; name: string; domain: string; frequency: string }[];
    timezones: string[];
}) => {
    const [step, setStep] = useState(0);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [followedFeeds, setFollowedFeeds] = useState<string[]>([]);
    const [frequency, setFrequency] = useState("daily");
    const [time, setTime] = useState("07:30");
    const [timezone, setTimezone] = useState(
        () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    const isLastStep = step === STEPS.length - 2;

    const next = () => {
        if (isLastStep) {
            router.visit(route("app.dashboard"));

            return;
        }

        setStep(step + 1);
    };

    return (
        <RootLayout
            title="Set up your digest"
            description="Pick your interests, follow a few feeds and choose when your digest arrives."
        >
            <div className="min-h-screen bg-muted/40">
                <header className="border-b border-border bg-background">
                    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                        <span className="flex items-center space-x-2.5 text-foreground">
                            <img
                                src={logoIcon}
                                alt=""
                                className="size-9 rounded-xl shadow-sm"
                            />
                            <span className="text-xl font-bold tracking-tight">
                                {APP_NAME}
                            </span>
                        </span>
                        <Link
                            href={route("app.dashboard")}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
                        >
                            Skip for now
                        </Link>
                    </div>
                </header>

                <main className="mx-auto max-w-3xl px-4 py-12">
                    <ol className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        {STEPS.map((label, index) => (
                            <Fragment key={label}>
                                {index > 0 && (
                                    <span className="hidden h-px flex-1 bg-border sm:block" />
                                )}
                                <li
                                    className="flex items-center gap-3"
                                    aria-current={
                                        index === step ? "step" : undefined
                                    }
                                >
                                    <span
                                        className={cn(
                                            "flex size-8 items-center justify-center rounded-full text-sm font-semibold",
                                            index <= step
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-muted text-muted-foreground",
                                        )}
                                    >
                                        {index < step ? (
                                            <Check
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            index + 1
                                        )}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-sm font-medium",
                                            index <= step
                                                ? "text-foreground"
                                                : "text-muted-foreground",
                                        )}
                                    >
                                        {label}
                                    </span>
                                </li>
                            </Fragment>
                        ))}
                    </ol>

                    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        {step === 0 && (
                            <>
                                <h1 className="text-2xl font-bold text-foreground">
                                    What do you like to read?
                                </h1>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Pick a few topics and we’ll suggest great
                                    sources.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2.5">
                                    {topics.map((topic) => (
                                        <label
                                            key={topic.id}
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={selectedTopics.includes(
                                                    topic.id,
                                                )}
                                                onChange={() =>
                                                    setSelectedTopics(
                                                        toggle(
                                                            selectedTopics,
                                                            topic.id,
                                                        ),
                                                    )
                                                }
                                            />
                                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50 hover:bg-muted">
                                                <span
                                                    className={cn(
                                                        "inline-block size-2 shrink-0 rounded-full",
                                                        topic.color,
                                                    )}
                                                />
                                                {topic.name}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}

                        {step === 1 && (
                            <>
                                <h1 className="text-2xl font-bold text-foreground">
                                    Follow a few feeds
                                </h1>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Recommended for your interests. You can
                                    always change this later.
                                </p>
                                <ul className="mt-4 divide-y divide-border">
                                    {feeds.map((feed) => (
                                        <li
                                            key={feed.id}
                                            className="flex items-center gap-4 py-4"
                                        >
                                            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-400 to-purple-500 text-sm font-bold text-white shadow-sm">
                                                {feed.name.charAt(0)}
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-semibold text-foreground">
                                                    {feed.name}
                                                </p>
                                                <p className="truncate text-xs text-muted-foreground">
                                                    {feed.domain} ·{" "}
                                                    {feed.frequency}
                                                </p>
                                            </div>
                                            <label className="cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="peer sr-only"
                                                    checked={followedFeeds.includes(
                                                        feed.id,
                                                    )}
                                                    onChange={() =>
                                                        setFollowedFeeds(
                                                            toggle(
                                                                followedFeeds,
                                                                feed.id,
                                                            ),
                                                        )
                                                    }
                                                />
                                                <span className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50">
                                                    {followedFeeds.includes(
                                                        feed.id,
                                                    )
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
                        )}

                        {step === 2 && (
                            <>
                                <h1 className="text-2xl font-bold text-foreground">
                                    When should we deliver?
                                </h1>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Your digest lands in your inbox on this
                                    schedule.
                                </p>
                                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                                    <div className="flex flex-col space-y-2">
                                        <Label htmlFor="frequency">
                                            Frequency
                                        </Label>
                                        <NativeSelect
                                            id="frequency"
                                            className="w-full"
                                            value={frequency}
                                            onChange={(event) =>
                                                setFrequency(
                                                    event.target.value,
                                                )
                                            }
                                        >
                                            {FREQUENCIES.map((option) => (
                                                <NativeSelectOption
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </NativeSelectOption>
                                            ))}
                                        </NativeSelect>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <Label htmlFor="time">Time</Label>
                                        <Input
                                            id="time"
                                            type="time"
                                            value={time}
                                            onChange={(event) =>
                                                setTime(event.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <Label htmlFor="timezone">
                                            Time zone
                                        </Label>
                                        <NativeSelect
                                            id="timezone"
                                            className="w-full"
                                            value={timezone}
                                            onChange={(event) =>
                                                setTimezone(event.target.value)
                                            }
                                        >
                                            {timezones.map((zone) => (
                                                <NativeSelectOption
                                                    key={zone}
                                                    value={zone}
                                                >
                                                    {zone.replaceAll("_", " ")}
                                                </NativeSelectOption>
                                            ))}
                                        </NativeSelect>
                                    </div>
                                </div>
                            </>
                        )}
                    </section>

                    <div className="mt-8 flex items-center justify-between">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setStep(step - 1)}
                            disabled={step === 0}
                        >
                            Back
                        </Button>
                        <Button type="button" size="lg" onClick={next}>
                            {isLastStep ? "Finish setup" : "Continue"}
                        </Button>
                    </div>
                </main>
            </div>
        </RootLayout>
    );
};

export default Onboarding;
