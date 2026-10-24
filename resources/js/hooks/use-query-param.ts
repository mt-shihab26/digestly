import { usePage } from "@inertiajs/react";

export const useQueryParam = (name: string): string | null => {
    const { url } = usePage();

    return new URL(url, window.location.origin).searchParams.get(name);
}
