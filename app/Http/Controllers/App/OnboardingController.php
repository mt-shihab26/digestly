<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    /**
     * Render the onboarding page shown after sign up
     */
    public function index(): Response
    {
        return Inertia::render("onboarding", [
            "topics" => $this->topics(),
            "feeds" => $this->feeds(),
            "timezones" => timezone_identifiers_list(),
        ]);
    }

    /**
     * Get the topics a new user can pick from
     *
     * @return array<int, array{id: string, name: string, color: string}>
     */
    private function topics(): array
    {
        return [
            ["id" => "tech", "name" => "Tech & Dev", "color" => "bg-indigo-500"],
            ["id" => "design", "name" => "Design", "color" => "bg-pink-500"],
            ["id" => "business", "name" => "Business", "color" => "bg-amber-500"],
            ["id" => "science", "name" => "Science", "color" => "bg-emerald-500"],
            ["id" => "world", "name" => "World news", "color" => "bg-sky-500"],
            ["id" => "culture", "name" => "Culture", "color" => "bg-violet-500"],
            ["id" => "health", "name" => "Health", "color" => "bg-green-500"],
            ["id" => "finance", "name" => "Finance", "color" => "bg-yellow-500"],
            ["id" => "ai", "name" => "AI & ML", "color" => "bg-indigo-500"],
            ["id" => "gaming", "name" => "Gaming", "color" => "bg-red-500"],
        ];
    }

    /**
     * Get the feeds recommended to a new user
     *
     * @return array<int, array{id: string, name: string, domain: string, frequency: string}>
     */
    private function feeds(): array
    {
        return [
            ["id" => "rails-radar", "name" => "Rails Radar", "domain" => "railsradar.example", "frequency" => "~3 / day"],
            ["id" => "byte-weekly", "name" => "Byte Weekly", "domain" => "byteweekly.example", "frequency" => "Weekly"],
            ["id" => "frontend-focus", "name" => "Frontend Focus", "domain" => "frontendfocus.example", "frequency" => "~2 / day"],
            ["id" => "open-source-digest", "name" => "Open Source Digest", "domain" => "osdigest.example", "frequency" => "~1 / day"],
            ["id" => "dev-dispatch", "name" => "Dev Dispatch", "domain" => "devdispatch.example", "frequency" => "—"],
            ["id" => "design-detail", "name" => "Design Detail", "domain" => "designdetail.example", "frequency" => "~1 / day"],
        ];
    }
}
