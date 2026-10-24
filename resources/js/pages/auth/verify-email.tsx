import { useForm } from "@inertiajs/react";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Form } from "@/components/elements/form";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";

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
            <div className="space-y-8 text-center">
                <AuthHeading
                    title="Verify your email"
                    description="Please verify your email address by clicking on the link we just emailed to you."
                />
                {status === "verification-link-sent" && (
                    <div className="text-sm font-medium text-green-600">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}
                <Form onSubmit={submit} className="items-center">
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                        variant="secondary"
                    >
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
            </div>
        </AuthLayout>
    );
};

export default VerifyEmail;
