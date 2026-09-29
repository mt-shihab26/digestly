import { useForm } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { CheckboxInput } from "@/components/elements/checkbox-input";
import { EmailInput } from "@/components/elements/email-input";
import { TextInput } from "@/components/elements/text-input";
import { PasswordInput } from "@/components/elements/password-input";
import { TextLink } from "@/components/elements/text-link";
import { Form } from "@/components/elements/form";

import { AuthLayout } from "@/components/layouts/auth-layout";

import { TextSeparator } from "@/components/screens/auth/shared/text-separator";
import { GoogleAuth } from "@/components/screens/auth/shared/google-auth";
import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";
import { AuthFooter } from "@/components/screens/auth/shared/auth-footer";
import { GithubAuth } from "@/components/screens/auth/shared/github-auth";

const Register = ({ passwordRules }: { passwordRules: string }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const submit = () => {
        post(route("register.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout
            title="Sign up"
            description="Digestly turns the feeds and newsletters you follow into one calm daily email digest."
        >
            <div className="space-y-8">
                <AuthHeading
                    title="Create your account"
                    description="Start your free digest — no credit card needed."
                />
                <div className="space-y-6">
                    <Form onSubmit={submit}>
                        <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                            <TextInput
                                id="first_name"
                                name="first_name"
                                label="First name"
                                error={errors.first_name}
                                containerClassName="flex-1"
                                value={data.first_name}
                                onChange={(v) => setData("first_name", v)}
                                autoComplete="given-name"
                                placeholder="Shihab"
                                required
                                autoFocus
                            />
                            <TextInput
                                id="last_name"
                                name="last_name"
                                label="Last name"
                                error={errors.last_name}
                                containerClassName="flex-1"
                                value={data.last_name}
                                onChange={(v) => setData("last_name", v)}
                                autoComplete="family-name"
                                placeholder="Mahamud"
                                required
                            />
                        </div>

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
                        />

                        <PasswordInput
                            id="password"
                            name="password"
                            label="Password"
                            error={errors.password}
                            value={data.password}
                            onChange={(v) => setData("password", v)}
                            autoComplete="new-password"
                            passwordrules={passwordRules}
                            minLength={8}
                            maxLength={72}
                            placeholder="At least 8 characters"
                            showStrength
                            required
                        />
                        <PasswordInput
                            id="password_confirmation"
                            name="password_confirmation"
                            label="Confirm password"
                            error={errors.password_confirmation}
                            value={data.password_confirmation}
                            onChange={(v) =>
                                setData("password_confirmation", v)
                            }
                            autoComplete="new-password"
                            placeholder="Repeat your password"
                            required
                        />
                        <CheckboxInput
                            id="terms"
                            error={errors.terms}
                            checked={data.terms}
                            onChange={(checked) => setData("terms", checked)}
                            required
                            label={
                                <>
                                    I agree to the{" "}
                                    <TextLink href="/terms" variant="primary">
                                        Terms
                                    </TextLink>{" "}
                                    and{" "}
                                    <TextLink href="/privacy" variant="primary">
                                        Privacy Policy
                                    </TextLink>
                                    .
                                </>
                            }
                        />
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={processing}
                            data-test="register-user-button"
                        >
                            {processing && <Spinner />}
                            Create account
                        </Button>
                    </Form>
                    <div className="space-y-5">
                        <TextSeparator>or continue with</TextSeparator>
                        <div className="flex space-x-3">
                            <GoogleAuth />
                            <GithubAuth />
                        </div>
                    </div>
                </div>
                <AuthFooter
                    text="Already have an account?"
                    linkLabel="Sign in"
                    href={route("login")}
                />
            </div>
        </AuthLayout>
    );
};

export default Register;
