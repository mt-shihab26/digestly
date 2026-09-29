import type { ReactNode } from "react";

import { RootLayout } from "@/components/layouts/root-layout";

export const AuthLayout = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) => {
    return (
        <RootLayout title={title} description={description}>
            {children}
        </RootLayout>
    );
};
