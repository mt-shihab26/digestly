export const StepHeading = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="space-y-1">
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
};
