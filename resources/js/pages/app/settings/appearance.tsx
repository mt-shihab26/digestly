import { AppearanceTabs } from "@/components/screens/app/settings/appearance/appearance-tabs";
import { SettingsLayout } from "@/components/screens/app/settings/settings-layout";

const Appearance = () => {
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

export default Appearance;
