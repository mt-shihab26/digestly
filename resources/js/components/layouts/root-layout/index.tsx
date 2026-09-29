import type { ReactNode } from "react";

import { Head } from "@inertiajs/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const RootLayout = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) => {
    return (
        <TooltipProvider>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
            <Toaster />
        </TooltipProvider>
    );
};
