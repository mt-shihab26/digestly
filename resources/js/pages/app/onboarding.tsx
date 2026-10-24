import type { TFeed } from "@/components/screens/app/onboarding/feeds-step";
import type { TOnboardingForm } from "@/types/forms";
import type { TTopic } from "@/components/screens/app/onboarding/interests-step";

import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useQueryParam } from "@/hooks/use-query-param";
import { logoIcon } from "@/lib/assets";
import { browserTimezone } from "@/lib/dates";

import { Link } from "@inertiajs/react";
import { RootLayout } from "@/components/layouts/root-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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

    useEffect(() => {
        router.replace({
            url: route("app.onboarding.index", { step: STEPS[step].key }),
            preserveState: true,
            preserveScroll: true,
        });
    }, [step]);

    const form: TOnboardingForm = useForm({
        topics: [] as string[],
        feeds: [] as string[],
        frequency: "daily",
        time: "07:30",
        timezone: browserTimezone(),
    });

    const onSubmit = () => {
        form.patch(route("app.onboarding.store"));
    };

    const isLastStep = step === STEPS.length - 2;

    const next = () => {
        if (isLastStep) {
            onSubmit();
            return;
        }
        setStep(step + 1);
    };

    const goTo = (index: number) => {
        if (index === STEPS.length - 1) {
            onSubmit();
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
                        <Button
                            variant="link"
                            render={<Link href={route("app.dashboard")} />}
                            nativeButton={false}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Skip for now
                        </Button>
                    </div>
                </header>

                <main className="mx-auto max-w-3xl space-y-10 px-4 py-12">
                    <OnboardingSteps
                        steps={STEPS}
                        current={step}
                        onSelect={goTo}
                    />

                    <Card className="shadow-sm [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
                        <CardContent>
                            {step === 0 && (
                                <InterestsStep form={form} topics={topics} />
                            )}
                            {step === 1 && (
                                <FeedsStep form={form} feeds={feeds} />
                            )}
                            {step === 2 && (
                                <DeliveryStep
                                    form={form}
                                    timezones={timezones}
                                />
                            )}
                        </CardContent>
                        <CardFooter className="justify-between">
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
                        </CardFooter>
                    </Card>
                </main>
            </div>
        </RootLayout>
    );
};

export default Onboarding;
