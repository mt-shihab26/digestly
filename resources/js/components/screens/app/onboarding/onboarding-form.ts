import type { InertiaFormProps } from "@inertiajs/react";

export type TOnboardingForm = InertiaFormProps<{
    topics: string[];
    feeds: string[];
    frequency: string;
    time: string;
    timezone: string;
}>;

export const toggle = (values: string[], value: string): string[] => {
    return values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];
};
