import { useForm } from "@inertiajs/react";
import { isGmailAddress } from "@/lib/utils";
import { useState } from "react";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { Mail } from "lucide-react";
import { EmailInput } from "@/components/elements/email-input";
import { Form } from "@/components/elements/form";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";

const ForgotPassword = () => {
    const [linkSent, setLinkSent] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = () => {
        post(route("password.email"), {
            preserveState: true,
            onSuccess: () => setLinkSent(true),
        });
    };

    if (linkSent) {
        return (
            <AuthLayout
                title="Check your email"
                description="Reset instructions are on the way."
                hideMessage
            >
                <div className="space-y-6 text-center">
                    <AuthHeading
                        title="Check your email"
                        description="Reset instructions are on the way."
                    />

                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <Mail className="size-7" aria-hidden="true" />
                    </span>

                    <p className="text-sm text-muted-foreground">
                        We sent a link to{" "}
                        <span className="font-semibold text-foreground">
                            {data.email}
                        </span>
                        . Click it to continue.
                    </p>

                    {isGmailAddress(data.email) && (
                        <Button
                            size="lg"
                            className="w-full"
                            nativeButton={false}
                            render={
                                <a
                                    href="https://mail.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            }
                        >
                            Open Gmail
                        </Button>
                    )}

                    <p className="text-sm text-muted-foreground">
                        Didn’t get it? Check spam or{" "}
                        <button
                            type="button"
                            onClick={submit}
                            disabled={processing}
                            className="cursor-pointer font-medium text-primary hover:underline disabled:opacity-50"
                        >
                            resend the email
                        </button>
                        .
                    </p>

                    <div className="space-x-1 text-sm text-muted-foreground">
                        <span>Or, return to</span>
                        <TextLink href={route("login")}>log in</TextLink>
                    </div>
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
            hideMessage
        >
            <div className="space-y-8">
                <AuthHeading
                    title="Forgot password"
                    description="Enter your email to receive a password reset link."
                />

                <div className="space-y-6">
                    <Form onSubmit={submit} className="space-y-6">
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

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={processing}
                            data-test="email-password-reset-link-button"
                        >
                            {processing && <Spinner />}
                            Email password reset link
                        </Button>
                    </Form>

                    <div className="space-x-1 text-center text-sm text-muted-foreground">
                        <span>Or, return to</span>
                        <TextLink href={route("login")}>log in</TextLink>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
