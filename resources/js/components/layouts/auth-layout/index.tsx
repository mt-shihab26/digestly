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
            <div className="flex min-h-screen">
                <div className="flex w-full flex-col justify-center px-4 py-10 sm:px-8 lg:w-136 lg:flex-none lg:px-14">
                    <div className="mx-auto w-full max-w-md">
                        <div className="mb-10">
                            <a
                                href="/html/index.html"
                                className="flex items-center gap-2.5 text-gray-900"
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
                <div className="relative hidden flex-1 overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 lg:block">
                    <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-16 size-96 rounded-full bg-fuchsia-400/20 blur-3xl"></div>
                    <div className="relative flex h-full flex-col justify-center px-16 xl:px-24">
                        <div className="max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl">
                            <div className="flex items-center gap-3">
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
                            <div className="mt-5 space-y-4">
                                <div className="flex gap-3">
                                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-500"></span>
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
                                <div className="flex gap-3">
                                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-pink-500"></span>
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
                                <div className="flex gap-3">
                                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500"></span>
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
                        <blockquote className="mt-10 max-w-md text-lg leading-relaxed font-medium text-white">
                            “I finally stopped opening 30 tabs every morning.
                            Digestly gives me the whole internet in five
                            minutes.”
                        </blockquote>
                        <p className="mt-3 text-sm text-indigo-200">
                            — Amira K., product designer
                        </p>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};
