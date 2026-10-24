import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { Check } from "lucide-react";
import { Fragment } from "react";

export const OnboardingSteps = ({
    steps,
    current,
    reachable,
    onSelect,
}: {
    steps: { key: string; label: string }[];
    current: number;
    reachable: number;
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
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => onSelect(index)}
                            disabled={index > reachable}
                            aria-current={
                                index === current ? "step" : undefined
                            }
                            className="group h-auto gap-3 px-1 py-1 hover:bg-transparent"
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
                        </Button>
                    </li>
                </Fragment>
            ))}
        </ol>
    );
};
