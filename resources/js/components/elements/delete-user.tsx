import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { Form } from "@/components/elements/form";
import { Heading } from "@/components/elements/heading";
import { PasswordInput } from "@/components/elements/password-input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export const DeleteUser = () => {
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
        reset,
        resetAndClearErrors,
    } = useForm({
        password: "",
    });

    const submit = () => {
        destroy(route("app.profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => passwordInput.current?.focus(),
        });
    };

    return (
        <div className="space-y-6">
            <Heading
                variant="small"
                title="Delete account"
                description="Delete your account and all of its resources"
            />
            <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">
                        Please proceed with caution, this cannot be undone.
                    </p>
                </div>

                <Dialog>
                    <DialogTrigger
                        render={
                            <Button
                                variant="destructive"
                                data-test="delete-user-button"
                            />
                        }
                    >
                        Delete account
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>
                            Are you sure you want to delete your account?
                        </DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources
                            and data will also be permanently deleted. Please
                            enter your password to confirm you would like to
                            permanently delete your account.
                        </DialogDescription>

                        <Form onSubmit={submit} className="space-y-6">
                            <PasswordInput
                                id="password"
                                name="password"
                                ref={passwordInput}
                                label={<span className="sr-only">Password</span>}
                                error={errors.password}
                                value={data.password}
                                onChange={(v) => setData("password", v)}
                                placeholder="Password"
                                autoComplete="current-password"
                            />

                            <DialogFooter className="gap-2">
                                <DialogClose
                                    render={
                                        <Button
                                            variant="secondary"
                                            onClick={() =>
                                                resetAndClearErrors()
                                            }
                                        />
                                    }
                                >
                                    Cancel
                                </DialogClose>

                                <Button
                                    type="submit"
                                    variant="destructive"
                                    disabled={processing}
                                    data-test="confirm-delete-user-button"
                                >
                                    Delete account
                                </Button>
                            </DialogFooter>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};
