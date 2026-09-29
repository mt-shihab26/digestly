export const AuthHeading = ({
    title,
    description,
}: {
    title: string;
    description?: string;
}) => {
    return (
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                {title}
            </h1>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
    );
};
