import type { InertiaLinkProps } from "@inertiajs/react";

export { cn } from "cn";

export const toUrl = (url: NonNullable<InertiaLinkProps["href"]>): string => {
    return typeof url === "string" ? url : url.url;
};

export const isGmailAddress = (email: string): boolean => {
    return email.toLowerCase().endsWith("@gmail.com");
};
