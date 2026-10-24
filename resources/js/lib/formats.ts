const firstCharacter = (value: string): string => {
    return Array.from(value)[0] ?? "";
};

export const initials = (fullName: string): string => {
    const names = fullName.trim().split(/\s+/u).filter(Boolean);

    if (names.length === 0) {
        return "";
    }

    if (names.length === 1) {
        return firstCharacter(names[0]).toUpperCase();
    }

    const firstInitial = firstCharacter(names[0]);
    const lastInitial = firstCharacter(names[names.length - 1]);

    return `${firstInitial}${lastInitial}`.toUpperCase();
};
