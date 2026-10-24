import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { SettingsLayout } from "@/components/layouts/settings-layout";
import { Form } from "@/components/elements/form";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { ManagePasskeys } from "@/components/screens/app/settings/security/manage-passkeys";
import { ManageTwoFactor } from "@/components/screens/app/settings/security/manage-two-factor";
import type { Passkey } from "@/types/auth";

const Security = (props: {
    passwordRules: string;
    canManagePasskeys?: boolean;
    passkeys?: Passkey[];
    canManageTwoFactor?: boolean;
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
}) => {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, put, processing, errors, reset } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const submit = () => {
        put(route("app.user-password.update"), {
            preserveScroll: true,
            onFinish: () =>
                reset("current_password", "password", "password_confirmation"),
            onError: (errors) => {
                if (errors.password) {
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <SettingsLayout
            title="Security settings"
            description="Ensure your account is using a long, random password to stay secure"
            breadcrumbs={[
                { title: "Security", href: route("app.security.edit") },
            ]}
        >
            <div className="space-y-12">
                <Form onSubmit={submit} className="space-y-6">
                    <PasswordInput
                        id="current_password"
                        ref={currentPasswordInput}
                        name="current_password"
                        label="Current password"
                        error={errors.current_password}
                        value={data.current_password}
                        onChange={(v) => setData("current_password", v)}
                        autoComplete="current-password"
                        placeholder="Current password"
                    />

                    <PasswordInput
                        id="password"
                        ref={passwordInput}
                        name="password"
                        label="New password"
                        error={errors.password}
                        value={data.password}
                        onChange={(v) => setData("password", v)}
                        autoComplete="new-password"
                        placeholder="New password"
                        passwordrules={props.passwordRules}
                    />

                    <PasswordInput
                        id="password_confirmation"
                        name="password_confirmation"
                        label="Confirm password"
                        error={errors.password_confirmation}
                        value={data.password_confirmation}
                        onChange={(v) => setData("password_confirmation", v)}
                        autoComplete="new-password"
                        placeholder="Confirm password"
                        passwordrules={props.passwordRules}
                    />

                    <div className="flex items-center gap-4">
                        <Button
                            type="submit"
                            disabled={processing}
                            data-test="update-password-button"
                        >
                            Save
                        </Button>
                    </div>
                </Form>

                <ManageTwoFactor
                    canManageTwoFactor={props.canManageTwoFactor}
                    requiresConfirmation={props.requiresConfirmation}
                    twoFactorEnabled={props.twoFactorEnabled}
                />

                <ManagePasskeys
                    canManagePasskeys={props.canManagePasskeys}
                    passkeys={props.passkeys}
                />
            </div>
        </SettingsLayout>
    );
};

export default Security;
