import * as React from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import type { TAppVariant } from "@/components/layouts/app-layout/app-shell";

export const AppContent = ({
    variant = "sidebar",
    children,
    ...props
}: React.ComponentProps<"main"> & {
    variant?: TAppVariant;
}) => {
    if (variant === "sidebar") {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <main
            className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
            {...props}
        >
            {children}
        </main>
    );
};
