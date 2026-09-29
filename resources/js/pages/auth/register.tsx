import { useForm } from "@inertiajs/react";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { EmailInput } from "@/components/elements/email-input";
import { PasswordInput } from "@/components/elements/password-input";
import { TextInput } from "@/components/elements/text-input";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

import githubIcon from "@/assets/icons/github-icon.svg";
import googleIcon from "@/assets/icons/google-icon.svg";

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
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Create your account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Start your free digest — no credit card needed.
                    </p>
                </div>
                <div className="space-y-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submit();
                        }}
                        className="flex flex-col space-y-5"
                    >
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
                            onChange={(value) =>
                                setData("password_confirmation", value)
                            }
                            autoComplete="new-password"
                            placeholder="Repeat your password"
                            required
                        />

                        <div className="flex items-start space-x-3">
                            <span className="flex h-5 shrink-0 items-center">
                                <Checkbox
                                    id="terms"
                                    checked={data.terms}
                                    onCheckedChange={(checked) =>
                                        setData("terms", checked)
                                    }
                                    required
                                />
                            </span>
                            <Label
                                htmlFor="terms"
                                className="inline font-normal text-muted-foreground"
                            >
                                I agree to the{" "}
                                <a
                                    href="/html/public/terms.html"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Terms
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/html/public/privacy.html"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </Label>
                        </div>

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
                    </form>

                    <div className="space-y-5">
                        <div className="flex items-center space-x-3">
                            <Separator className="flex-1" />
                            <span className="text-xs text-muted-foreground">
                                or continue with
                            </span>
                            <Separator className="flex-1" />
                        </div>

                        <div className="flex space-x-3">
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1"
                                nativeButton={false}
                                render={<a href="#" />}
                            >
                                <img
                                    src={googleIcon}
                                    alt=""
                                    className="size-5"
                                />
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1"
                                nativeButton={false}
                                render={<a href="#" />}
                            >
                                <img
                                    src={githubIcon}
                                    alt=""
                                    className="size-5"
                                />
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <TextLink href={route("login")}>Sign in</TextLink>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;
