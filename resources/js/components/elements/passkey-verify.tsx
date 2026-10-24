import { router } from "@inertiajs/react";
import { usePasskeyVerify } from "@laravel/passkeys/react";
import { KeyRound } from "lucide-react";
import { InputError } from "@/components/elements/input-error";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";

export const PasskeyVerify = ({
    routes,
    label,
    loadingLabel,
    separator,
}: {
    routes?: {
        options: string;
        submit: string;
    };
    label?: string;
    loadingLabel?: string;
    separator?: string;
} = {}) => {
    const { verify, isLoading, error, isSupported } = usePasskeyVerify({
        ...(routes && {
            routes: {
                options: routes.options,
                submit: routes.submit,
            },
        }),
        onSuccess: (response) => {
            router.visit(response.redirect ?? route("app.dashboard"));
        },
    });

    if (!isSupported) {
        return null;
    }

    return (
        <>
            <div className="grid gap-2">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={verify}
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : <KeyRound className="h-4 w-4" />}
                    {isLoading
                        ? (loadingLabel ?? "Authenticating...")
                        : (label ?? "Sign in with a passkey")}
                </Button>
                {error && (
                    <InputError message={error} className="text-center" />
                )}
            </div>

            <FieldSeparator className="text-xs uppercase">
                {separator ?? "Or continue with email"}
            </FieldSeparator>
        </>
    );
};
