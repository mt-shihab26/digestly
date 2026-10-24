import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { useForm } from "@inertiajs/react";
import { useMemo, useState } from "react";

import { Form } from "@/components/elements/form";
import { TextInput } from "@/components/elements/text-input";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";

import { AuthLayout } from "@/components/layouts/auth-layout";

import { AuthHeading } from "@/components/screens/auth/shared/auth-heading";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { OTP_MAX_LENGTH } from "@/hooks/use-two-factor-auth";

const TwoFactorChallenge = () => {
    const [showRecoveryInput, setShowRecoveryInput] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            code: "",
            recovery_code: "",
        });

    const authConfigContent = useMemo<{
        title: string;
        description: string;
        toggleText: string;
    }>(() => {
        if (showRecoveryInput) {
            return {
                title: "Recovery code",
                description:
                    "Please confirm access to your account by entering one of your emergency recovery codes.",
                toggleText: "login using an authentication code",
            };
        }

        return {
            title: "Authentication code",
            description:
                "Enter the authentication code provided by your authenticator application.",
            toggleText: "login using a recovery code",
        };
    }, [showRecoveryInput]);

    const toggleRecoveryMode = (): void => {
        setShowRecoveryInput(!showRecoveryInput);
        clearErrors();
        reset();
    };

    const submit = () => {
        post(route("two-factor.login.store"), {
            onFinish: () => reset(),
        });
    };

    return (
        <AuthLayout
            title={authConfigContent.title}
            description={authConfigContent.description}
            hideMessage
        >
            <div className="space-y-8">
                <AuthHeading
                    title={authConfigContent.title}
                    description={authConfigContent.description}
                />
                <Form onSubmit={submit}>
                    {showRecoveryInput ? (
                        <TextInput
                            name="recovery_code"
                            error={errors.recovery_code}
                            value={data.recovery_code}
                            onChange={(v) => setData("recovery_code", v)}
                            placeholder="Enter recovery code"
                            autoFocus
                            required
                        />
                    ) : (
                        <Field
                            data-invalid={!!errors.code || undefined}
                            className="items-center text-center"
                        >
                            <div className="flex w-full items-center justify-center">
                                <InputOTP
                                    aria-invalid={!!errors.code || undefined}
                                    name="code"
                                    maxLength={OTP_MAX_LENGTH}
                                    value={data.code}
                                    onChange={(value) => setData("code", value)}
                                    disabled={processing}
                                    pattern={REGEXP_ONLY_DIGITS}
                                    autoFocus
                                >
                                    <InputOTPGroup>
                                        {Array.from(
                                            { length: OTP_MAX_LENGTH },
                                            (_, index) => (
                                                <InputOTPSlot
                                                    key={index}
                                                    index={index}
                                                />
                                            ),
                                        )}
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <FieldError>{errors.code}</FieldError>
                        </Field>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={processing}
                    >
                        Continue
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                        <span>or you can </span>
                        <Button
                            type="button"
                            variant="link"
                            className="h-auto p-0 text-foreground underline"
                            onClick={toggleRecoveryMode}
                        >
                            {authConfigContent.toggleText}
                        </Button>
                    </div>
                </Form>
            </div>
        </AuthLayout>
    );
};

export default TwoFactorChallenge;
