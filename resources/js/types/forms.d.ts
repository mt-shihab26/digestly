import type { InertiaFormProps } from "@inertiajs/react";

export type TOnboardingForm = InertiaFormProps<{
    topics: string[];
    feeds: string[];
    frequency: string;
    time: string;
    timezone: string;
}>;
