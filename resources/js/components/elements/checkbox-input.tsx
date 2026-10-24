import type { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type { ReactNode } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";

export const CheckboxInput = ({
    label,
    error,
    containerClassName,
    onChange,
    ...props
}: Omit<CheckboxPrimitive.Root.Props, "onCheckedChange"> & {
    label?: ReactNode;
    error?: string;
    containerClassName?: string;
    onChange?: (checked: boolean) => void;
}) => {
    return (
        <Field
            orientation="horizontal"
            data-invalid={!!error || undefined}
            className={containerClassName}
        >
            <Checkbox
                onCheckedChange={(checked) => onChange?.(checked)}
                aria-invalid={!!error || undefined}
                {...props}
            />
            <FieldContent>
                {label && (
                    <FieldLabel
                        htmlFor={props.id}
                        className="inline font-normal text-muted-foreground"
                    >
                        {label}
                    </FieldLabel>
                )}
                <FieldError>{error}</FieldError>
            </FieldContent>
        </Field>
    );
};
