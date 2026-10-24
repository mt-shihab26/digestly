import type { TFeed } from "@/components/screens/app/onboarding/feeds-step";
import type { TTopic } from "@/components/screens/app/onboarding/interests-step";

import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import { Link } from "@inertiajs/react";
import { RootLayout } from "@/components/layouts/root-layout";
import { Button } from "@/components/ui/button";

import { DeliveryStep } from "@/components/screens/app/onboarding/delivery-step";
import { FeedsStep } from "@/components/screens/app/onboarding/feeds-step";
import { InterestsStep } from "@/components/screens/app/onboarding/interests-step";
import { OnboardingSteps } from "@/components/screens/app/onboarding/onboarding-steps";

import { APP_NAME } from "@/lib/env";

import { logoIcon } from "@/lib/assets";

const STEPS = ["Interests", "Follow feeds", "Delivery", "Done"];

const STEP_KEYS = ["interests", "feeds", "delivery"];

const toggle = (values: string[], value: string): string[] =>
    values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];

const Onboarding = ({
    topics,
    feeds,
    timezones,
}: {
    topics: TTopic[];
    feeds: TFeed[];
    timezones: string[];
}) => {
    const { url } = usePage();
    const [step, setStep] = useState(() => {
        const key = new URL(url, window.location.origin).searchParams.get(
            "step",
        );

        return Math.max(STEP_KEYS.indexOf(key ?? ""), 0);
    });
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [followedFeeds, setFollowedFeeds] = useState<string[]>([]);
    const [frequency, setFrequency] = useState("daily");
    const [time, setTime] = useState("07:30");
    const [timezone, setTimezone] = useState(
        () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    useEffect(() => {
        router.replace({
            url: route("app.onboarding.index", { step: STEP_KEYS[step] }),
            preserveState: true,
            preserveScroll: true,
        });
    }, [step]);

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
                    <OnboardingSteps steps={STEPS} current={step} />

                    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        {step === 0 && (
                            <InterestsStep
                                topics={topics}
                                selected={selectedTopics}
                                onToggle={(id) =>
                                    setSelectedTopics(
                                        toggle(selectedTopics, id),
                                    )
                                }
                            />
                        )}
                        {step === 1 && (
                            <FeedsStep
                                feeds={feeds}
                                followed={followedFeeds}
                                onToggle={(id) =>
                                    setFollowedFeeds(toggle(followedFeeds, id))
                                }
                            />
                        )}
                        {step === 2 && (
                            <DeliveryStep
                                timezones={timezones}
                                frequency={frequency}
                                time={time}
                                timezone={timezone}
                                onFrequencyChange={setFrequency}
                                onTimeChange={setTime}
                                onTimezoneChange={setTimezone}
                            />
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
