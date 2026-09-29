import type { ReactNode } from "react";

import { RootLayout } from "@/components/layouts/root-layout";

import { VITE_APP_NAME } from "@/lib/env";

import logoIcon from "@/assets/icons/logo-icon.svg";

export const AuthLayout = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) => {
    return (
        <RootLayout title={title} description={description}>
            <div className="flex min-h-screen lg:h-screen lg:overflow-hidden">
                <div className="scrollbar-none flex w-full flex-col px-4 py-10 sm:px-8 lg:w-136 lg:flex-none lg:overflow-y-auto lg:px-14">
                    <div className="m-auto w-full max-w-md space-y-10">
                        <div>
                            <a
                                href="/html/index.html"
                                className="flex items-center space-x-2.5 text-gray-900"
                            >
                                <img
                                    src={logoIcon}
                                    alt=""
                                    className="size-9 rounded-xl shadow-sm"
                                />
                                <span className="text-xl font-bold tracking-tight">
                                    {VITE_APP_NAME}
                                </span>
                            </a>
                        </div>
                        {children}
                    </div>
                </div>
                <div className="relative scrollbar-none hidden flex-1 overflow-x-hidden overflow-y-auto bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 lg:block">
                    <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-16 size-96 rounded-full bg-fuchsia-400/20 blur-3xl"></div>
                    <div className="relative flex min-h-full flex-col justify-center space-y-10 px-16 py-10 xl:px-24">
                        <div className="max-w-md space-y-5 rounded-2xl bg-white/95 p-6 shadow-2xl">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={logoIcon}
                                    alt=""
                                    className="size-9 rounded-lg"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Your daily digest
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Today · 7:30 AM · 14 stories
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex space-x-3">
                                    <span className="flex h-5 shrink-0 items-center">
                                        <span className="size-2 rounded-full bg-indigo-500"></span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Rails 8.1 ships with a faster boot
                                            path
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Rails Radar · 6 min read
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <span className="flex h-5 shrink-0 items-center">
                                        <span className="size-2 rounded-full bg-pink-500"></span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Why your design system needs fewer
                                            components
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Design Detail · 8 min read
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <span className="flex h-5 shrink-0 items-center">
                                        <span className="size-2 rounded-full bg-emerald-500"></span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Webb spots the earliest spiral
                                            galaxy yet
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Science Signal · 4 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <blockquote className="max-w-md text-lg leading-relaxed font-medium text-white">
                                “I finally stopped opening 30 tabs every
                                morning. Digestly gives me the whole internet in
                                five minutes.”
                            </blockquote>
                            <p className="text-sm text-indigo-200">
                                — Amira K., product designer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};
