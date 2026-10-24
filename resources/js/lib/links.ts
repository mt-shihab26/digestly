import type { TNavItem } from "@/components/layouts/app-layout/nav-main";

export const settingsLinks: TNavItem[] = [
    {
        title: "Profile",
        href: route("app.profile.edit"),
        icon: null,
    },
    {
        title: "Security",
        href: route("app.security.edit"),
        icon: null,
    },
    {
        title: "Appearance",
        href: route("app.appearance.edit"),
        icon: null,
    },
];
