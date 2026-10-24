import type { TOnboardingForm } from "@/components/screens/app/onboarding/onboarding-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select";

const FREQUENCIES = [
    { value: "daily", label: "Every day" },
    { value: "weekdays", label: "Weekdays only" },
    { value: "weekly", label: "Weekly (Sunday)" },
];

export const DeliveryStep = ({
    form,
    timezones,
}: {
    form: TOnboardingForm;
    timezones: string[];
}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-foreground">
                When should we deliver?
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
                Your digest lands in your inbox on this schedule.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <NativeSelect
                        id="frequency"
                        className="w-full"
                        value={form.data.frequency}
                        onChange={(event) =>
                            form.setData("frequency", event.target.value)
                        }
                    >
                        {FREQUENCIES.map((option) => (
                            <NativeSelectOption
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </NativeSelectOption>
                        ))}
                    </NativeSelect>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                        id="time"
                        type="time"
                        value={form.data.time}
                        onChange={(event) =>
                            form.setData("time", event.target.value)
                        }
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="timezone">Time zone</Label>
                    <NativeSelect
                        id="timezone"
                        className="w-full"
                        value={form.data.timezone}
                        onChange={(event) =>
                            form.setData("timezone", event.target.value)
                        }
                    >
                        {timezones.map((zone) => (
                            <NativeSelectOption key={zone} value={zone}>
                                {zone.replaceAll("_", " ")}
                            </NativeSelectOption>
                        ))}
                    </NativeSelect>
                </div>
            </div>
        </>
    );
};
