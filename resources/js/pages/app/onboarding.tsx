import type { TFeed } from "@/components/screens/app/onboarding/feeds-step";
import type { TOnboardingForm } from "@/types/forms";
import type { TTopic } from "@/components/screens/app/onboarding/interests-step";

import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useQueryParam } from "@/hooks/use-query-param";
import { logoIcon } from "@/lib/assets";
import { browserTimezone } from "@/lib/dates";
import { firstErrorFor } from "@/lib/utils";

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
    { key: "interests", label: "Interests", fields: ["topics"] },
    { key: "feeds", label: "Follow feeds", fields: ["feeds"] },
    {
        key: "delivery",
        label: "Delivery",
        fields: ["frequency", "time", "timezone"],
    },
    { key: "done", label: "Done", fields: [] },
];

const isStepComplete = (
    data: TOnboardingForm["data"],
    index: number,
): boolean => {
    return (
        [
            data.topics.length > 0,
            data.feeds.length > 0,
            data.time !== "" && data.timezone !== "",
        ][index] ?? true
    );
};

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

    const form: TOnboardingForm = useForm<TOnboardingForm["data"]>({
        topics: [],
        feeds: [],
        frequency: "daily",
        time: "07:30",
        timezone: browserTimezone(),
    });

    const firstIncompleteStep = STEPS.findIndex(
        (_, index) => !isStepComplete(form.data, index),
    );
    const reachableStep =
        firstIncompleteStep === -1 ? STEPS.length - 1 : firstIncompleteStep;

    const [step, setStep] = useState(() =>
        Math.min(
            Math.max(
                STEPS.slice(0, -1).findIndex(({ key }) => key === stepKey),
                0,
            ),
            reachableStep,
        ),
    );

    useEffect(() => {
        router.replace({
            url: route("app.onboarding.edit", { step: STEPS[step].key }),
            preserveState: true,
            preserveScroll: true,
        });
    }, [step]);

    const onSubmit = () => {
        form.patch(route("app.onboarding.store"), {
            onError: (errors) => {
                const stepWithError = STEPS.findIndex(({ fields }) =>
                    fields.some((field) => firstErrorFor(errors, field)),
                );

                if (stepWithError !== -1) {
                    setStep(stepWithError);
                }
            },
        });
    };

    const isLastStep = step === STEPS.length - 2;

    const canContinue = isStepComplete(form.data, step) && !form.processing;

    const next = () => {
        if (!canContinue) {
            return;
        }
        if (isLastStep) {
            onSubmit();
            return;
        }
        setStep(step + 1);
    };

    const goTo = (index: number) => {
        if (index > reachableStep) {
            return;
        }
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
                        reachable={reachableStep}
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
                            <Button
                                type="button"
                                size="lg"
                                onClick={next}
                                disabled={!canContinue}
                            >
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
