import { cn } from "@/lib/utils";

import { Check } from "lucide-react";
import { Fragment } from "react";

export const OnboardingSteps = ({
    steps,
    current,
    onSelect,
}: {
    steps: { key: string; label: string }[];
    current: number;
    onSelect: (index: number) => void;
}) => {
    return (
        <ol className="flex flex-wrap items-center justify-between gap-4">
            {steps.map(({ key, label }, index) => (
                <Fragment key={key}>
                    {index > 0 && (
                        <span className="hidden h-px flex-1 bg-border sm:block" />
                    )}
                    <li>
                        <button
                            type="button"
                            onClick={() => onSelect(index)}
                            aria-current={
                                index === current ? "step" : undefined
                            }
                            className="group flex cursor-pointer items-center gap-3 rounded-lg focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
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
                                    "text-sm font-medium group-hover:underline",
                                    index <= current
                                        ? "text-foreground"
                                        : "text-muted-foreground",
                                )}
                            >
                                {label}
                            </span>
                        </button>
                    </li>
                </Fragment>
            ))}
        </ol>
    );
};
