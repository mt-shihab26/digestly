import type { TUser } from "@/types/models";

export type TAuth = {
    user: TUser;
};

export type TTwoFactorSetupData = {
    svg: string;
    url: string;
};

export type TTwoFactorSecretKey = {
    secretKey: string;
};
