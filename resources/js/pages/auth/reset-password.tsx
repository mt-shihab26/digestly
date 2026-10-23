import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { EmailInput } from "@/components/elements/email-input";
import { Form } from "@/components/elements/form";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const ResetPassword = ({
    token,
    email,
    passwordRules,
}: {
    token: string;
    email: string;
    passwordRules: string;
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token,
        email,
        password: "",
        password_confirmation: "",
    });

    const submit = () => {
        post(route("password.update"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
            hideMessage
        >
            <Form onSubmit={submit} className="space-y-6">
                <EmailInput
                    id="email"
                    name="email"
                    label="Email"
                    error={errors.email}
                    value={data.email}
                    autoComplete="email"
                    readOnly
                />

                <PasswordInput
                    id="password"
                    name="password"
                    label="Password"
                    error={errors.password}
                    value={data.password}
                    onChange={(v) => setData("password", v)}
                    autoComplete="new-password"
                    placeholder="Password"
                    passwordrules={passwordRules}
                    autoFocus
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
                    passwordrules={passwordRules}
                />

                <Button
                    type="submit"
                    className="mt-4 w-full"
                    disabled={processing}
                    data-test="reset-password-button"
                >
                    {processing && <Spinner />}
                    Reset password
                </Button>
            </Form>
        </AuthLayout>
    );
};

export default ResetPassword;
