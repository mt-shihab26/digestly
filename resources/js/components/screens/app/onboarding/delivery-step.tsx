import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { TOnboardingForm } from "@/types/forms";

import { StepHeading } from "@/components/screens/app/onboarding/step-heading";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
    const timezoneItems = timezones.map((zone) => ({
        value: zone,
        label: zone.replaceAll("_", " "),
    }));

    return (
        <div className="space-y-6">
            <StepHeading
                title="When should we deliver?"
                description="Your digest lands in your inbox on this schedule."
            />
            <FieldGroup className="grid sm:grid-cols-3">
                <Field>
                    <FieldLabel htmlFor="frequency">Frequency</FieldLabel>
                    <Select
                        items={FREQUENCIES}
                        value={form.data.frequency}
                        onValueChange={(value) =>
                            form.setData("frequency", value ?? "")
                        }
                    >
                        <SelectTrigger id="frequency" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {FREQUENCIES.map((option) => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
                <Field>
                    <FieldLabel htmlFor="time">Time</FieldLabel>
                    <Input
                        id="time"
                        type="time"
                        value={form.data.time}
                        onChange={(event) =>
                            form.setData("time", event.target.value)
                        }
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="timezone">Time zone</FieldLabel>
                    <Select
                        items={timezoneItems}
                        value={form.data.timezone}
                        onValueChange={(value) =>
                            form.setData("timezone", value ?? "")
                        }
                    >
                        <SelectTrigger id="timezone" className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {timezoneItems.map((zone) => (
                                <SelectItem key={zone.value} value={zone.value}>
                                    {zone.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
            </FieldGroup>
        </div>
    );
};
