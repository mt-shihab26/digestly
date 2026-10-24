import type { ReactNode } from "react";
import type { TBreadcrumbItem } from "@/components/layouts/app-layout/breadcrumbs";

import { useCurrentUrl } from "@/hooks/use-current-url";
import { settingsLinks } from "@/lib/links";
import { cn, toUrl } from "@/lib/utils";

import { Link } from "@inertiajs/react";
import { Heading } from "@/components/elements/heading";
import { AppLayout } from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const SettingsLayout = ({
    title,
    description,
    children,
    breadcrumbs,
}: {
    title: string;
    description: string;
    children: ReactNode;
    breadcrumbs: TBreadcrumbItem[];
}) => {
    const { isCurrentOrParentUrl } = useCurrentUrl();

    return (
        <AppLayout
            title={title}
            description={description}
            breadcrumbs={[
                { title: "Settings", href: route("app.profile.edit") },
                ...breadcrumbs,
            ]}
        >
            <div className="space-y-8 px-4 py-6">
                <Heading
                    title="Settings"
                    description="Manage your profile and account settings"
                />
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                    <aside className="w-full max-w-xl lg:w-48">
                        <nav
                            className="flex flex-col space-y-1 space-x-0"
                            aria-label="Settings"
                        >
                            {settingsLinks.map((item, index) => (
                                <Button
                                    key={`${toUrl(item.href)}-${index}`}
                                    size="sm"
                                    variant="ghost"
                                    render={<Link href={item.href} />}
                                    nativeButton={false}
                                    className={cn(
                                        "w-full justify-start hover:underline",
                                        {
                                            "bg-muted": isCurrentOrParentUrl(
                                                item.href,
                                            ),
                                        },
                                    )}
                                >
                                    {item.icon && (
                                        <item.icon className="h-4 w-4" />
                                    )}
                                    {item.title}
                                </Button>
                            ))}
                        </nav>
                    </aside>
                    <Separator className="lg:hidden" />
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
