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
    timezones,
    frequency,
    time,
    timezone,
    onFrequencyChange,
    onTimeChange,
    onTimezoneChange,
}: {
    timezones: string[];
    frequency: string;
    time: string;
    timezone: string;
    onFrequencyChange: (frequency: string) => void;
    onTimeChange: (time: string) => void;
    onTimezoneChange: (timezone: string) => void;
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
                        value={frequency}
                        onChange={(event) =>
                            onFrequencyChange(event.target.value)
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
                        value={time}
                        onChange={(event) => onTimeChange(event.target.value)}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="timezone">Time zone</Label>
                    <NativeSelect
                        id="timezone"
                        className="w-full"
                        value={timezone}
                        onChange={(event) =>
                            onTimezoneChange(event.target.value)
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
