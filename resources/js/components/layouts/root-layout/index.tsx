import type { ReactNode } from "react";

import { Head } from "@inertiajs/react";

export const RootLayout = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </>
    );
};
