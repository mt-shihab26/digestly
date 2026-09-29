import { cn } from "@/lib/utils";

const strengthLabels = ["Too weak", "Weak", "Fair", "Strong", "Very strong"];

const getPasswordStrength = (password: string): number => {
    if (password.length === 0) {
        return 0;
    }

    return [
        password.length >= 8,
        /[a-z]/.test(password) && /[A-Z]/.test(password),
        /\d/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ].filter(Boolean).length;
};

export const PasswordStrength = ({ password }: { password?: string }) => {
    if (!password) {
        return null;
    }

    const strength = getPasswordStrength(password);

    return (
        <>
            <div className="flex space-x-1">
                {[1, 2, 3, 4].map((level) => (
                    <span
                        key={level}
                        className={cn(
                            "h-1 flex-1 rounded-full bg-muted",
                            level <= strength && "bg-green-500",
                        )}
                    />
                ))}
            </div>
            <p className="text-xs text-muted-foreground">
                {strengthLabels[strength]}
            </p>
        </>
    );
};
