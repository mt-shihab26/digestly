import { Form } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import InputError from "@/components/elements/input-error";
import PasswordInput from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import PasskeyVerify from "@/components/elements/passkey-verify";

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Confirm password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <PasskeyVerify
                routes={{
                    options: route("passkey.confirm-options"),
                    submit: route("passkey.confirm"),
                }}
                label="Confirm with passkey"
                loadingLabel="Confirming..."
                separator="Or confirm with password"
            />

            <Form
                action={route("password.confirm.store")}
                method="post"
                resetOnSuccess={["password"]}
            >
                {({ processing, errors }) => (
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <PasswordInput
                                id="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                autoFocus
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center">
                            <Button
                                className="w-full"
                                disabled={processing}
                                data-test="confirm-password-button"
                            >
                                {processing && <Spinner />}
                                Confirm password
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </AuthLayout>
    );
}
