import { useForm } from "@inertiajs/react";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { CheckboxInput } from "@/components/elements/checkbox-input";
import { EmailInput } from "@/components/elements/email-input";
import { PasskeyVerify } from "@/components/elements/passkey-verify";
import { PasswordInput } from "@/components/elements/password-input";
import { TextLink } from "@/components/elements/text-link";
import { Form } from "@/components/elements/form-element";
import { TextSeparator } from "@/components/elements/text-separator";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { GoogleAuth } from "@/components/screens/auth/shared/google-auth";
import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";
import { GithubAuth } from "@/components/screens/auth/shared/github-auth";

const Login = ({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = () => {
        post(route("login.store"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout
            title="Log in"
            description="Digestly turns the feeds and newsletters you follow into one calm daily email digest."
        >
            <div className="space-y-8">
                <AuthHeading
                    title="Welcome back"
                    description="Log in to your account to read today's digest."
                />
                {status && (
                    <div className="text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
                <div className="space-y-6">
                    <div>
                        <PasskeyVerify />
                        <Form onSubmit={submit}>
                            <EmailInput
                                id="email"
                                name="email"
                                label="Email address"
                                error={errors.email}
                                value={data.email}
                                onChange={(v) => setData("email", v)}
                                autoComplete="email"
                                placeholder="you@example.com"
                                required
                                autoFocus
                            />
                            <PasswordInput
                                id="password"
                                name="password"
                                label="Password"
                                error={errors.password}
                                value={data.password}
                                onChange={(v) => setData("password", v)}
                                autoComplete="current-password"
                                placeholder="Your password"
                                required
                            />
                            <div className="flex items-center justify-between">
                                <CheckboxInput
                                    id="remember"
                                    name="remember"
                                    label="Remember me"
                                    checked={data.remember}
                                    onChange={(checked) =>
                                        setData("remember", checked)
                                    }
                                />
                                {canResetPassword && (
                                    <TextLink
                                        href={route("password.request")}
                                        variant="primary"
                                        className="text-sm"
                                    >
                                        Forgot password?
                                    </TextLink>
                                )}
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                Log in
                            </Button>
                        </Form>
                    </div>
                    <div className="space-y-5">
                        <TextSeparator>or continue with</TextSeparator>
                        <div className="flex space-x-3">
                            <GoogleAuth />
                            <GithubAuth />
                        </div>
                    </div>
                </div>
                <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <TextLink href={route("register")}>Sign up</TextLink>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
