import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/types";

import { RootLayout } from "@/components/layouts/root-layout";

import { AppContent } from "./app-content";
import { AppShell } from "./app-shell";
import { AppSidebar } from "./app-sidebar";
import { AppSidebarHeader } from "./app-sidebar-header";

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
