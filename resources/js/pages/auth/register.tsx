import { useForm } from "@inertiajs/react";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { InputError } from "@/components/elements/input-error";
import { PasswordInput } from "@/components/elements/password-input";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { PasswordStrength } from "@/components/screens/auth/register/password-strength";

const Register = ({ passwordRules }: { passwordRules: string }) => {
    const { data, setData, post, transform, processing, errors, reset } =
        useForm<{
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            password_confirmation: string;
            terms: boolean;
        }>({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            terms: false,
        });

    transform(({ first_name, last_name, terms, ...rest }) => ({
        ...rest,
        name: `${first_name} ${last_name}`.trim(),
    }));

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
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                                <div className="flex flex-1 flex-col space-y-2">
                                    <Label htmlFor="first_name">
                                        First name
                                    </Label>
                                    <Input
                                        id="first_name"
                                        name="first_name"
                                        value={data.first_name}
                                        onChange={(event) =>
                                            setData(
                                                "first_name",
                                                event.target.value,
                                            )
                                        }
                                        autoComplete="given-name"
                                        placeholder="Shihab"
                                        aria-invalid={!!errors.first_name}
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="flex flex-1 flex-col space-y-2">
                                    <Label htmlFor="last_name">Last name</Label>
                                    <Input
                                        id="last_name"
                                        name="last_name"
                                        value={data.last_name}
                                        onChange={(event) =>
                                            setData(
                                                "last_name",
                                                event.target.value,
                                            )
                                        }
                                        autoComplete="family-name"
                                        placeholder="Mahamud"
                                        aria-invalid={!!errors.last_name}
                                        required
                                    />
                                </div>
                            </div>
                            <InputError message={errors.last_name} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(event) =>
                                    setData("email", event.target.value)
                                }
                                autoComplete="email"
                                placeholder="you@example.com"
                                aria-invalid={!!errors.email}
                                required
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <PasswordInput
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(event) =>
                                    setData("password", event.target.value)
                                }
                                autoComplete="new-password"
                                passwordrules={passwordRules}
                                minLength={8}
                                maxLength={72}
                                placeholder="At least 8 characters"
                                aria-invalid={!!errors.password}
                                required
                            />
                            <PasswordStrength password={data.password} />
                            <InputError message={errors.password} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="password_confirmation">
                                Confirm password
                            </Label>
                            <PasswordInput
                                id="password_confirmation"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(event) =>
                                    setData(
                                        "password_confirmation",
                                        event.target.value,
                                    )
                                }
                                autoComplete="new-password"
                                placeholder="Repeat your password"
                                aria-invalid={!!errors.password_confirmation}
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                            />
                        </div>

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
                                <svg className="size-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 01-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2.1v2.8A11 11 0 0012 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.7 14.1a6.6 6.6 0 010-4.2V7.1H2.1a11 11 0 000 9.8l3.6-2.8z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 002.1 7.1l3.6 2.8C6.6 7.400 9.100 5.400 12 5.400z"
                                    />
                                </svg>
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1"
                                nativeButton={false}
                                render={<a href="#" />}
                            >
                                <svg
                                    className="size-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5a11.5 11.5 0 00-3.6 22.4c.6.1.8-.2.8-.6v-2c-3.200.7-3.900-1.400-3.900-1.400-.5-1.300-1.300-1.700-1.300-1.700-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.700 1.300 3.300 1 .1-.7.400-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 015.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .4.2.7.8.6A11.500 11.500 0 0012 .5z" />
                                </svg>
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
