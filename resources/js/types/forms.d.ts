import type { InertiaFormProps } from "@inertiajs/react";
import type { TDeliveryFrequency } from "@/types/enums";

export type TOnboardingForm = InertiaFormProps<{
    topics: string[];
    feeds: string[];
    frequency: TDeliveryFrequency;
    time: string;
    timezone: string;
}>;
