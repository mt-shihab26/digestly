import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Form = ({
    onSubmit,
    className,
    ...props
}: Omit<ComponentProps<"form">, "onSubmit"> & {
    onSubmit: () => void;
}) => {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
            className={cn("flex flex-col space-y-5", className)}
            {...props}
        />
    );
};
