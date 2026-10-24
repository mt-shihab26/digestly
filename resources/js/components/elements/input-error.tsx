import type { ComponentProps } from "react";

import { FieldError } from "@/components/ui/field";

export const InputError = ({
    message,
    ...props
}: Omit<ComponentProps<typeof FieldError>, "children" | "errors"> & {
    message?: string;
}) => {
    return <FieldError {...props}>{message}</FieldError>;
};
