import type { ReactNode } from "react";
import type { BreadcrumbItem, NavItem } from "@/types";

import { Link } from "@inertiajs/react";
import Heading from "@/components/elements/heading";
import { AppLayout } from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCurrentUrl } from "@/hooks/use-current-url";
import { cn, toUrl } from "@/lib/utils";

const links: NavItem[] = [
    {
        title: "Profile",
        href: route("profile.edit"),
        icon: null,
    },
    {
        title: "Security",
        href: route("security.edit"),
        icon: null,
    },
    {
        title: "Appearance",
        href: route("appearance.edit"),
        icon: null,
    },
];

export const SettingsLayout = ({
    title,
    description,
    children,
    breadcrumbs,
}: {
    title: string;
    description: string;
    children: ReactNode;
    breadcrumbs: BreadcrumbItem[];
}) => {
    const { isCurrentOrParentUrl } = useCurrentUrl();

    return (
        <AppLayout
            title={title}
            description={description}
            breadcrumbs={[
                { title: "Settings", href: route("profile.edit") },
                ...breadcrumbs,
            ]}
        >
            <div className="px-4 py-6">
                <Heading
                    title="Settings"
                    description="Manage your profile and account settings"
                />
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <aside className="w-full max-w-xl lg:w-48">
                        <nav
                            className="flex flex-col space-y-1 space-x-0"
                            aria-label="Settings"
                        >
                            {links.map((item, index) => (
                                <Button
                                    key={`${toUrl(item.href)}-${index}`}
                                    size="sm"
                                    variant="ghost"
                                    asChild
                                    className={cn("w-full justify-start", {
                                        "bg-muted": isCurrentOrParentUrl(
                                            item.href,
                                        ),
                                    })}
                                >
                                    <Link href={item.href}>
                                        {item.icon && (
                                            <item.icon className="h-4 w-4" />
                                        )}
                                        {item.title}
                                    </Link>
                                </Button>
                            ))}
                        </nav>
                    </aside>
                    <Separator className="my-6 lg:hidden" />
                    <div className="flex-1 md:max-w-2xl">
                        <section className="max-w-xl space-y-12">
                            <div className="space-y-6">
                                <Heading
                                    variant="small"
                                    title={title}
                                    description={description}
                                />
                                {children}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};
