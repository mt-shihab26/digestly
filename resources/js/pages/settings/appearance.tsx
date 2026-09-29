import { AppearanceTabs } from "@/components/elements/appearance-tabs";
import { SettingsLayout } from "@/components/layouts/settings-layout";

const Appearance = () => {
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
};

export default Appearance;
