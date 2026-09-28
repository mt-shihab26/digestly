import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/types";

import { AppContent } from "@/components/app-content";
import { AppShell } from "@/components/app-shell";
import { AppSidebar } from "@/components/app-sidebar";
import { AppSidebarHeader } from "@/components/app-sidebar-header";
import { RootLayout } from "@/components/layouts/root-layout";

export const AppLayout = ({
    title,
    description,
    children,
    breadcrumbs = [],
}: {
    title: string;
    description: string;
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}) => {
    return (
        <RootLayout title={title} description={description}>
            <AppShell variant="sidebar">
                <AppSidebar />
                <AppContent
                    variant="sidebar"
                    className="min-w-0 overflow-x-clip"
                >
                    <AppSidebarHeader breadcrumbs={breadcrumbs} />
                    {children}
                </AppContent>
            </AppShell>
        </RootLayout>
    );
};
