import type { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const TextSeparator = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex items-center space-x-3", className)}>
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">{children}</span>
            <Separator className="flex-1" />
        </div>
    );
};
