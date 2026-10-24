import type { ComponentProps, ReactNode, Ref } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const TextInput = ({
    label,
    error,
    containerClassName,
    onChange,
    ref,
    ...props
}: Omit<ComponentProps<"input">, "type" | "onChange"> & {
    label?: ReactNode;
    error?: string;
    containerClassName?: string;
    onChange?: (value: string) => void;
    ref?: Ref<HTMLInputElement>;
}) => {
    return (
        <Field data-invalid={!!error || undefined} className={containerClassName}>
            {label && <FieldLabel htmlFor={props.id}>{label}</FieldLabel>}
            <Input
                type="text"
                ref={ref}
                onChange={(event) => onChange?.(event.target.value)}
                aria-invalid={!!error || undefined}
                {...props}
            />
            <FieldError>{error}</FieldError>
        </Field>
    );
};
