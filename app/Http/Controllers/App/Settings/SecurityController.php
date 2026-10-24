<?php

namespace App\Http\Controllers\App\Settings;

use App\Concerns\ValidationRules;
use App\Http\Controllers\Controller;
use App\Http\Requests\App\Settings\TwoFactorAuthenticationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;

class SecurityController extends Controller
{
    use ValidationRules;

    /**
     * Show the user's security settings page.
     */
    public function edit(TwoFactorAuthenticationRequest $request): Response
    {
        $props = [
            "canManageTwoFactor" => Features::canManageTwoFactorAuthentication(),
            "canManagePasskeys" => Features::canManagePasskeys(),
            "passkeys" => Features::canManagePasskeys()
                ? $request->user()
                    ->passkeys()
                    ->select(["id", "name", "credential", "created_at", "last_used_at"])
                    ->latest()
                    ->get()
                    ->map(fn ($passkey) => [
                        "id" => $passkey->id,
                        "name" => $passkey->name,
                        "authenticator" => $passkey->authenticator,
                        "created_at_diff" => $passkey->created_at->diffForHumans(),
                        "last_used_at_diff" => $passkey->last_used_at?->diffForHumans(),
                    ])
                    ->values()
                    ->all()
                : [],
            "passwordRules" => Password::defaults()->toPasswordRulesString(),
        ];

        if (Features::canManageTwoFactorAuthentication()) {
            $request->ensureStateIsValid();

            $props["twoFactorEnabled"] = $request->user()->hasEnabledTwoFactorAuthentication();
            $props["requiresConfirmation"] = Features::optionEnabled(Features::twoFactorAuthentication(), "confirm");
        }

        return inertia("app/settings/security", $props);
    }

    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            "current_password" => $this->currentPasswordRules(),
            "password" => $this->passwordRules(),
        ]);

        $request->user()->update([
            "password" => $validated["password"],
        ]);

        Inertia::flash("toast", ["type" => "success", "message" => __("Password updated.")]);

        return back();
    }
}
