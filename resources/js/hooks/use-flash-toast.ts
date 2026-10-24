import { router } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

export type TToastType = "success" | "info" | "warning" | "error";

export type TFlashToast = {
    type: TToastType;
    message: string;
};

export const useFlashToast = (): void => {
    useEffect(() => {
        return router.on("flash", (event) => {
            const flash = (event as CustomEvent).detail?.flash;
            const data = flash?.toast as TFlashToast | undefined;

            if (!data) {
                return;
            }

            toast[data.type](data.message);
        });
    }, []);
}
