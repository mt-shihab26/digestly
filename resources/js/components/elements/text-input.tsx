import type { ComponentProps, ReactNode, Ref } from "react";
import { InputError } from "@/components/elements/input-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
        <div className={cn("flex flex-col space-y-2", containerClassName)}>
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <Input
                type="text"
                ref={ref}
                onChange={(event) => onChange?.(event.target.value)}
                aria-invalid={!!error || undefined}
                {...props}
            />
            <InputError message={error} />
        </div>
    );
};
