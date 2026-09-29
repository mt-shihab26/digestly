import type { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type { ReactNode } from "react";
import { InputError } from "@/components/elements/input-error";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
        <div className={cn("flex flex-col space-y-2", containerClassName)}>
            <div className="flex items-start space-x-3">
                <span className="flex h-5 shrink-0 items-center">
                    <Checkbox
                        onCheckedChange={(checked) => onChange?.(checked)}
                        aria-invalid={!!error || undefined}
                        {...props}
                    />
                </span>
                {label && (
                    <Label
                        htmlFor={props.id}
                        className="inline leading-5 font-normal text-muted-foreground"
                    >
                        {label}
                    </Label>
                )}
            </div>
            <InputError message={error} />
        </div>
    );
};
