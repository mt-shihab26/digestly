import { useForm } from "@inertiajs/react";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { Form } from "@/components/elements/form";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { PasskeyVerify } from "@/components/elements/passkey-verify";
import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";

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
            hideMessage
        >
            <div className="space-y-8">
                <AuthHeading
                    title="Confirm password"
                    description="This is a secure area of the application. Please confirm your password before continuing."
                />
                <div>
                    <PasskeyVerify
                        routes={{
                            options: route("passkey.confirm-options"),
                            submit: route("passkey.confirm"),
                        }}
                        label="Confirm with passkey"
                        loadingLabel="Confirming..."
                        separator="Or confirm with password"
                    />
                    <Form onSubmit={submit}>
                        <PasswordInput
                            id="password"
                            name="password"
                            label="Password"
                            error={errors.password}
                            value={data.password}
                            onChange={(v) => setData("password", v)}
                            placeholder="Your password"
                            autoComplete="current-password"
                            required
                            autoFocus
                        />
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={processing}
                            data-test="confirm-password-button"
                        >
                            {processing && <Spinner />}
                            Confirm password
                        </Button>
                    </Form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ConfirmPassword;
