import type { InertiaLinkProps } from "@inertiajs/react";

export { cn } from "cn";

export const toUrl = (url: NonNullable<InertiaLinkProps["href"]>): string => {
    return typeof url === "string" ? url : url.url;
};

export const isGmailAddress = (email: string): boolean => {
    return email.toLowerCase().endsWith("@gmail.com");
};

export const toggleArrayItem = (values: string[], value: string): string[] => {
    return values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];
};

export const firstErrorFor = (
    errors: Record<string, string | undefined>,
    field: string,
): string | undefined => {
    return (
        errors[field] ??
        Object.entries(errors).find(([key]) => key.startsWith(`${field}.`))?.[1]
    );
};
