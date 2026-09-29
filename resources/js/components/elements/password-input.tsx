import { Eye, EyeOff } from "lucide-react";
import type { ComponentProps, ReactNode, Ref } from "react";
import { useState } from "react";
import { InputError } from "@/components/elements/input-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordStrength } from "@/components/screens/auth/register/password-strength";
import { cn } from "@/lib/utils";

export const PasswordInput = ({
    label,
    error,
    showStrength = false,
    className,
    containerClassName,
    onChange,
    ref,
    ...props
}: Omit<ComponentProps<"input">, "type" | "onChange"> & {
    label?: ReactNode;
    error?: string;
    showStrength?: boolean;
    containerClassName?: string;
    onChange?: (value: string) => void;
    ref?: Ref<HTMLInputElement>;
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={cn("flex flex-col space-y-2", containerClassName)}>
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <div className="relative">
                <Input
                    type={showPassword ? "text" : "password"}
                    className={cn("pr-10", className)}
                    ref={ref}
                    onChange={(event) => onChange?.(event.target.value)}
                    aria-invalid={!!error || undefined}
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 text-muted-foreground hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
                    aria-label={
                        showPassword ? "Hide password" : "Show password"
                    }
                    tabIndex={-1}
                >
                    {showPassword ? (
                        <EyeOff className="size-4" />
                    ) : (
                        <Eye className="size-4" />
                    )}
                </button>
            </div>
            {showStrength && (
                <PasswordStrength password={props.value?.toString()} />
            )}
            <InputError message={error} />
        </div>
    );
};
