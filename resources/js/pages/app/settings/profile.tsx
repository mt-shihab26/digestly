import { useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { DeleteUser } from "@/components/screens/app/settings/profile/delete-user";
import { SettingsLayout } from "@/components/layouts/settings-layout";
import { EmailInput } from "@/components/elements/email-input";
import { Form } from "@/components/elements/form";
import { TextInput } from "@/components/elements/text-input";
import { Button } from "@/components/ui/button";

const Profile = ({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) => {
    const { auth } = usePage().props;

    const { data, setData, patch, processing, errors } = useForm({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit = () => {
        patch(route("app.profile.update"), {
            preserveScroll: true,
        });
    };

    return (
        <SettingsLayout
            title="Profile settings"
            description="Update your name and email address"
            breadcrumbs={[
                { title: "Profile", href: route("app.profile.edit") },
            ]}
        >
            <div className="space-y-12">
                <Form onSubmit={submit} className="space-y-6">
                    <TextInput
                        id="name"
                        name="name"
                        label="Name"
                        error={errors.name}
                        value={data.name}
                        onChange={(v) => setData("name", v)}
                        required
                        autoComplete="name"
                        placeholder="Full name"
                    />

                    <EmailInput
                        id="email"
                        name="email"
                        label="Email address"
                        error={errors.email}
                        value={data.email}
                        onChange={(v) => setData("email", v)}
                        required
                        autoComplete="username"
                        placeholder="Email address"
                    />

                    {mustVerifyEmail && auth.user.email_verified_at === null && (
                        <div>
                            <p className="-mt-4 text-sm text-muted-foreground">
                                Your email address is unverified.{" "}
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                >
                                    Click here to re-send the verification
                                    email.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 text-sm font-medium text-green-600">
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <Button
                            type="submit"
                            disabled={processing}
                            data-test="update-profile-button"
                        >
                            Save
                        </Button>
                    </div>
                </Form>

                <DeleteUser />
            </div>
        </SettingsLayout>
    );
};

export default Profile;
