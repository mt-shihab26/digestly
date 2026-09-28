import AppearanceTabs from "@/components/appearance-tabs";
import { SettingsLayout } from "@/components/layouts/settings-layout";

export default function Appearance() {
    return (
        <SettingsLayout
            title="Appearance settings"
            description="Update the appearance settings for your account"
            breadcrumbs={[
                { title: "Appearance", href: route("appearance.edit") },
            ]}
        >
            <AppearanceTabs />
        </SettingsLayout>
    );
}
