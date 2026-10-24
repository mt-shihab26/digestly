import type { TFeed } from "@/components/screens/app/onboarding/feeds-step";
import type { TTopic } from "@/components/screens/app/onboarding/interests-step";

import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useQueryParam } from "@/hooks/use-query-param";
import { logoIcon } from "@/lib/assets";
import { browserTimezone } from "@/lib/dates";

import { Link } from "@inertiajs/react";
import { RootLayout } from "@/components/layouts/root-layout";
import { Button } from "@/components/ui/button";

import { DeliveryStep } from "@/components/screens/app/onboarding/delivery-step";
import { FeedsStep } from "@/components/screens/app/onboarding/feeds-step";
import { InterestsStep } from "@/components/screens/app/onboarding/interests-step";
import { OnboardingSteps } from "@/components/screens/app/onboarding/onboarding-steps";

import { APP_NAME } from "@/lib/env";

const STEPS = [
    { key: "interests", label: "Interests" },
    { key: "feeds", label: "Follow feeds" },
    { key: "delivery", label: "Delivery" },
    { key: "done", label: "Done" },
];

const Onboarding = ({
    topics,
    feeds,
    timezones,
}: {
    topics: TTopic[];
    feeds: TFeed[];
    timezones: string[];
}) => {
    const stepKey = useQueryParam("step");

    const [step, setStep] = useState(() =>
        Math.max(
            STEPS.slice(0, -1).findIndex(({ key }) => key === stepKey),
            0,
        ),
    );

    const form = useForm({
        topics: [] as string[],
        feeds: [] as string[],
        frequency: "daily",
        time: "07:30",
        timezone: browserTimezone(),
    });

    useEffect(() => {
        router.replace({
            url: route("app.onboarding.index", { step: STEPS[step].key }),
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

    const goTo = (index: number) => {
        if (index === STEPS.length - 1) {
            router.visit(route("app.dashboard"));

            return;
        }

        setStep(index);
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
                    <OnboardingSteps
                        steps={STEPS}
                        current={step}
                        onSelect={goTo}
                    />

                    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                        {step === 0 && (
                            <InterestsStep form={form} topics={topics} />
                        )}
                        {step === 1 && <FeedsStep form={form} feeds={feeds} />}
                        {step === 2 && (
                            <DeliveryStep form={form} timezones={timezones} />
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
