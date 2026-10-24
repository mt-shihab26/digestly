import { cn } from "@/lib/utils";

export type TTopic = { id: string; name: string; color: string };

export const InterestsStep = ({
    topics,
    selected,
    onToggle,
}: {
    topics: TTopic[];
    selected: string[];
    onToggle: (id: string) => void;
}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-foreground">
                What do you like to read?
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
                Pick a few topics and we’ll suggest great sources.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
                {topics.map((topic) => (
                    <label key={topic.id} className="cursor-pointer">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={selected.includes(topic.id)}
                            onChange={() => onToggle(topic.id)}
                        />
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50 hover:bg-muted">
                            <span
                                className={cn(
                                    "inline-block size-2 shrink-0 rounded-full",
                                    topic.color,
                                )}
                            />
                            {topic.name}
                        </span>
                    </label>
                ))}
            </div>
        </>
    );
};
