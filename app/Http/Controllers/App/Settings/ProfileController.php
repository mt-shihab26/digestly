<?php

namespace App\Http\Controllers\App\Settings;

use App\Concerns\ValidationRules;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    use ValidationRules;

    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        return inertia("app/settings/profile", [
            "mustVerifyEmail" => $request->user() instanceof MustVerifyEmail && config("auth.verify_email"),
            "status" => $request->session()->get("status"),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            "first_name" => $this->nameRules(),
            "last_name" => $this->nameRules(),
            "email" => $this->emailRules($request->user()->id),
        ]);

        $request->user()->fill($validated);

        if ($request->user()->isDirty("email")) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        Inertia::flash("toast", ["type" => "success", "message" => __("Profile updated.")]);

        return to_route("app.profile.edit");
    }

    /**
     * Delete the user's profile.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            "password" => $this->currentPasswordRules(),
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect("/");
    }
}
