import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { EmailInput } from "@/components/elements/email-input";
import { Form } from "@/components/elements/form";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const ForgotPassword = ({ status }: { status?: string }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = () => {
        post(route("password.email"));
    };

    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="space-y-6">
                <Form onSubmit={submit} className="space-y-6">
                    <EmailInput
                        id="email"
                        name="email"
                        label="Email address"
                        error={errors.email}
                        value={data.email}
                        onChange={(v) => setData("email", v)}
                        autoComplete="off"
                        placeholder="email@example.com"
                        autoFocus
                    />

                    <Button
                        type="submit"
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
        </AuthLayout>
    );
};

export default ForgotPassword;
