<?php

namespace App\Http\Controllers\App;

use App\Enums\DeliveryFrequency;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    /**
     * Render the onboarding page shown after sign up
     */
    public function edit(Request $request): Response
    {
        abort_if($request->user()->onboarded_at, redirect()->route("app.dashboard"));

        return inertia("app/onboarding", [
            "topics" => $this->topics(),
            "feeds" => $this->feeds(),
            "timezones" => timezone_identifiers_list(),
        ]);
    }

    /**
     * Store all the user preference on onboarding
     */
    public function store(Request $request): RedirectResponse
    {
        abort_if($request->user()->onboarded_at, 403);

        $validated = $request->validate([
            "topics" => ["required", "array", "min:1", "max:20"],
            "topics.*" => ["required", "string", "distinct", Rule::in(array_column($this->topics(), "id"))],
            "feeds" => ["required", "array"],
            "feeds.*" => ["required", "string", "distinct", Rule::in(array_column($this->feeds(), "id"))],
            "frequency" => ["required", Rule::enum(DeliveryFrequency::class)],
            "time" => ["required", "date_format:H:i"],
            "timezone" => ["required", "timezone:all"],
        ], [
            "topics.required" => "Pick at least one topic.",
            "feeds.required" => "Follow at least one feed.",
            "topics.*.in" => "One of the selected topics is not available.",
            "feeds.*.in" => "One of the selected feeds is not available.",
        ]);

        $request->user()->update([
            "topics" => $validated["topics"],
            "feeds" => $validated["feeds"],
            "digest_frequency" => $validated["frequency"],
            "digest_time" => $validated["time"],
            "timezone" => $validated["timezone"],
            "onboarded_at" => now(),
        ]);

        Inertia::flash("toast", ["type" => "success", "message" => __("Your digest is all set.")]);

        return redirect()->route("app.dashboard");
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
            ["id" => "laravel-news", "name" => "Laravel News", "domain" => "laravel-news.com", "frequency" => "~3 / day"],
            ["id" => "laravel-blog", "name" => "Laravel Blog", "domain" => "blog.laravel.com", "frequency" => "Weekly"],
            ["id" => "react-blog", "name" => "React Blog", "domain" => "react.dev", "frequency" => "Monthly"],
            ["id" => "this-week-in-react", "name" => "This Week In React", "domain" => "thisweekinreact.com", "frequency" => "Weekly"],
        ];
    }
}
