import { Form } from "@inertiajs/react";
import logoIcon from "@/assets/icons/logo-icon.svg";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { InputError } from "@/components/elements/input-error";
import { PasswordInput } from "@/components/elements/password-input";
import { TextLink } from "@/components/elements/text-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

const Register = ({ passwordRules }: { passwordRules: string }) => {
    return (
        <AuthLayout
            title="Sign up"
            description="Digestly turns the feeds and newsletters you follow into one calm daily email digest."
        >
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
                                    Digestly
                                </span>
                            </a>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Create your account
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Start your free digest — no credit card needed.
                        </p>
                        <div className="mt-8">
                            <form
                                action="/html/auth/onboarding.html"
                                className="space-y-5"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first_name"
                                            className="mb-1.5 block text-sm font-medium text-gray-700"
                                        >
                                            First name
                                        </label>
                                        <input
                                            id="first_name"
                                            name="first_name"
                                            type="text"
                                            value=""
                                            placeholder="Shihab"
                                            className="block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last_name"
                                            className="mb-1.5 block text-sm font-medium text-gray-700"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            id="last_name"
                                            name="last_name"
                                            type="text"
                                            value=""
                                            placeholder="Mahamud"
                                            className="block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email_address"
                                        className="mb-1.5 block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email_address"
                                        name="email_address"
                                        type="email"
                                        value=""
                                        placeholder="you@example.com"
                                        className="block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-1.5 block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        maxLength={72}
                                        placeholder="At least 8 characters"
                                        className="block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                        required
                                    />
                                    <div className="mt-2 flex gap-1">
                                        <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                                        <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                                        <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                                        <span className="h-1 flex-1 rounded-full bg-gray-200"></span>
                                    </div>
                                    <p className="mt-1.5 text-xs text-gray-500">
                                        Strong — add a symbol to make it
                                        stronger.
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password_confirmation"
                                        className="mb-1.5 block text-sm font-medium text-gray-700"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        value=""
                                        placeholder="Repeat your password"
                                        className="block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                        required
                                    />
                                </div>
                                <label className="flex items-start gap-2 text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-0.5 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span>
                                        I agree to the
                                        <a
                                            href="/html/public/terms.html"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                                        >
                                            Terms
                                        </a>
                                        and
                                        <a
                                            href="/html/public/privacy.html"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                                        >
                                            Privacy Policy
                                        </a>
                                        .
                                    </span>
                                </label>
                                <button className="w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none active:bg-indigo-700">
                                    Create account
                                </button>
                            </form>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="bg-white px-3 text-gray-400">
                                            or continue with
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        <svg
                                            className="size-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#4285F4"
                                                d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 01-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2.1v2.8A11 11 0 0012 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.7 14.1a6.6 6.6 0 010-4.2V7.1H2.1a11 11 0 000 9.8l3.6-2.8z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 002.1 7.1l3.6 2.8C6.6 7.400 9.100 5.400 12 5.400z"
                                            />
                                        </svg>
                                        Google
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        <svg
                                            className="size-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 .5a11.5 11.5 0 00-3.6 22.4c.6.1.8-.2.8-.6v-2c-3.200.7-3.900-1.400-3.900-1.400-.5-1.300-1.300-1.700-1.300-1.700-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.700 1.300 3.300 1 .1-.7.400-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 015.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .4.2.7.8.6A11.500 11.500 0 0012 .5z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
                            Already have an account?
                            <a
                                href="/html/auth/sign-in.html"
                                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                            >
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative hidden flex-1 overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 lg:block">
                    <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-16 size-96 rounded-full bg-fuchsia-400/20 blur-3xl"></div>
                    <div className="relative flex h-full flex-col justify-center px-16 xl:px-24">
                        <div className="max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </span>
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
        </AuthLayout>
    );
};

export default Register;
