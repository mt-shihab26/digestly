import type { TAppearance } from "@/hooks/use-appearance";
import type { LucideIcon } from "lucide-react";

import { useAppearance } from "@/hooks/use-appearance";

import { Monitor, Moon, Sun } from "lucide-react";
import { SettingsLayout } from "@/components/screens/app/settings/shared/settings-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS: { value: TAppearance; icon: LucideIcon; label: string }[] = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
];

const AppearanceTabs = () => {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <Tabs
            value={appearance}
            onValueChange={(value) => updateAppearance(value as TAppearance)}
        >
            <TabsList>
                {TABS.map(({ value, icon: Icon, label }) => (
                    <TabsTrigger key={value} value={value}>
                        <Icon />
                        {label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

const TAppearance = () => {
    return (
        <SettingsLayout
            title="Appearance settings"
            description="Update the appearance settings for your account"
            breadcrumbs={[
                { title: "Appearance", href: route("app.appearance.edit") },
            ]}
        >
            <AppearanceTabs />
        </SettingsLayout>
    );
};

export default TAppearance;
