import { Link } from "@inertiajs/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof Link> & {
    variant?: "default" | "primary";
};

export const TextLink = ({
    variant = "default",
    className = "",
    children,
    ...props
}: Props) => {
    return (
        <Link
            className={cn(
                variant === "primary"
                    ? "font-medium text-primary hover:underline"
                    : "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
};
