import { Check } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

export const OnboardingSteps = ({
    steps,
    current,
}: {
    steps: string[];
    current: number;
}) => {
    return (
        <ol className="mb-10 flex flex-wrap items-center justify-between gap-4">
            {steps.map((label, index) => (
                <Fragment key={label}>
                    {index > 0 && (
                        <span className="hidden h-px flex-1 bg-border sm:block" />
                    )}
                    <li
                        className="flex items-center gap-3"
                        aria-current={index === current ? "step" : undefined}
                    >
                        <span
                            className={cn(
                                "flex size-8 items-center justify-center rounded-full text-sm font-semibold",
                                index <= current
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground",
                            )}
                        >
                            {index < current ? (
                                <Check className="size-4" aria-hidden="true" />
                            ) : (
                                index + 1
                            )}
                        </span>
                        <span
                            className={cn(
                                "text-sm font-medium",
                                index <= current
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
    );
};
