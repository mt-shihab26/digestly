import { Link } from "@inertiajs/react";
import { BookOpen, FolderGit2, LayoutGrid } from "lucide-react";
import { AppLogo } from "@/components/layouts/app-layout/app-logo";
import { NavFooter } from "@/components/layouts/app-layout/nav-footer";
import { NavMain } from "@/components/layouts/app-layout/nav-main";
import { NavUser } from "@/components/layouts/app-layout/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { TNavItem } from "@/types/components";

const mainNavItems: TNavItem[] = [
    {
        title: "Dashboard",
        href: route("app.dashboard"),
        icon: LayoutGrid,
    },
];

const footerNavItems: TNavItem[] = [
    {
        title: "Repository",
        href: "https://github.com/laravel/react-starter-kit",
        icon: FolderGit2,
    },
    {
        title: "Documentation",
        href: "https://laravel.com/docs/starter-kits#react",
        icon: BookOpen,
    },
];

export const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="hover:underline"
                            render={
                                <Link href={route("app.dashboard")} prefetch />
                            }
                        >
                            <AppLogo />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
};
