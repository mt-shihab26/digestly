import type { ComponentProps, ReactNode, Ref } from "react";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { PasswordStrength } from "@/components/screens/auth/register/password-strength";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";

export const PasswordInput = ({
    label,
    error,
    showStrength = false,
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
        <Field data-invalid={!!error || undefined} className={containerClassName}>
            {label && <FieldLabel htmlFor={props.id}>{label}</FieldLabel>}
            <InputGroup>
                <InputGroupInput
                    type={showPassword ? "text" : "password"}
                    ref={ref}
                    onChange={(event) => onChange?.(event.target.value)}
                    aria-invalid={!!error || undefined}
                    {...props}
                />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        size="icon-xs"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                            showPassword ? "Hide password" : "Show password"
                        }
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            {showStrength && (
                <PasswordStrength password={props.value?.toString()} />
            )}
            <FieldError>{error}</FieldError>
        </Field>
    );
};
