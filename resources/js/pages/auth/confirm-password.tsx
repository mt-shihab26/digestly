import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Form } from "@/components/elements/form";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { PasskeyVerify } from "@/components/elements/passkey-verify";

const ConfirmPassword = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = () => {
        post(route("password.confirm.store"), {
            onFinish: () => reset("password"),
        });
    };

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

            <Form onSubmit={submit} className="space-y-6">
                <PasswordInput
                    id="password"
                    name="password"
                    label="Password"
                    error={errors.password}
                    value={data.password}
                    onChange={(v) => setData("password", v)}
                    placeholder="Password"
                    autoComplete="current-password"
                    autoFocus
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={processing}
                    data-test="confirm-password-button"
                >
                    {processing && <Spinner />}
                    Confirm password
                </Button>
            </Form>
        </AuthLayout>
    );
};

export default ConfirmPassword;
