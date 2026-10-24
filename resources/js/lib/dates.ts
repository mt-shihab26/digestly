export const browserTimezone = (): string => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
