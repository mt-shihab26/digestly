<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class WellKnownController extends Controller
{
    /**
     * Point password managers to the passkey settings page
     */
    public function passkeys(): JsonResponse
    {
        return response()->json([
            "enroll" => route("app.security.edit"),
            "manage" => route("app.security.edit"),
        ]);
    }

    /**
     * Render security.txt with the security contact
     */
    public function security(): Response
    {
        $lines = [
            "Contact: mailto:mt.shihab26@gmail.com",
            "Expires: ".now()->addYear()->startOfDay()->toIso8601ZuluString(),
            "Preferred-Languages: en",
            "Canonical: ".route("well-known.security"),
        ];

        return response(implode("\n", $lines)."\n")->header("Content-Type", "text/plain; charset=UTF-8");
    }
}
