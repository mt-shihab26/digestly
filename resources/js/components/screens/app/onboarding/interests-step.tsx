import type { TOnboardingForm } from "@/types/forms";

import { cn } from "@/lib/utils";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type TTopic = { id: string; name: string; color: string };

export const InterestsStep = ({
    form,
    topics,
}: {
    form: TOnboardingForm;
    topics: TTopic[];
}) => {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold text-foreground">
                    What do you like to read?
                </h1>
                <p className="text-sm text-muted-foreground">
                    Pick a few topics and we’ll suggest great sources.
                </p>
            </div>
            <ToggleGroup
                multiple
                variant="outline"
                size="lg"
                spacing={2.5}
                className="w-full flex-wrap"
                value={form.data.topics}
                onValueChange={(selected) => form.setData("topics", selected)}
            >
                {topics.map((topic) => (
                    <ToggleGroupItem
                        key={topic.id}
                        value={topic.id}
                        className="gap-2 rounded-full px-4 data-pressed:border-primary data-pressed:bg-primary/10 data-pressed:text-primary"
                    >
                        <span
                            className={cn(
                                "inline-block size-2 shrink-0 rounded-full",
                                topic.color,
                            )}
                        />
                        {topic.name}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>
    );
};
