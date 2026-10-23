import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Form } from "@/components/elements/form";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const VerifyEmail = ({ status }: { status?: string }) => {
    const { post, processing } = useForm({});

    const submit = () => {
        post(route("verification.send"));
    };

    return (
        <AuthLayout
            title="Email verification"
            description="Please verify your email address by clicking on the link we just emailed to you."
            hideMessage
        >
            {status === "verification-link-sent" && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <Form onSubmit={submit} className="items-center space-y-6">
                <Button type="submit" disabled={processing} variant="secondary">
                    {processing && <Spinner />}
                    Resend verification email
                </Button>

                <TextLink
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-sm"
                >
                    Log out
                </TextLink>
            </Form>
        </AuthLayout>
    );
};

export default VerifyEmail;
