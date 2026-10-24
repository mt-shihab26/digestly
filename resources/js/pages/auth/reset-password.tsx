import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { EmailInput } from "@/components/elements/email-input";
import { Form } from "@/components/elements/form";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";

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
            <div className="space-y-8">
                <AuthHeading
                    title="Reset password"
                    description="Please enter your new password below."
                />
                <Form onSubmit={submit}>
                    <EmailInput
                        id="email"
                        name="email"
                        label="Email address"
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
                        placeholder="At least 8 characters"
                        passwordrules={passwordRules}
                        showStrength
                        required
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
                        placeholder="Repeat your password"
                        passwordrules={passwordRules}
                        required
                    />
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                        data-test="reset-password-button"
                    >
                        {processing && <Spinner />}
                        Reset password
                    </Button>
                </Form>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;
