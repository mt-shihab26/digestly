import type { ReactNode } from "react";

import { Head } from "@inertiajs/react";
import { TooltipProvider } from "@/components/ui/tooltip";

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
            {children}
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </TooltipProvider>
    );
};
