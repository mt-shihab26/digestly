<?php

namespace App\Http\Controllers\Site;

use Illuminate\Contracts\View\View;

class PricingController
{
    /**
     * Render the marketing pricing page
     */
    public function index(): View
    {
        return view("pages.pricing");
    }
}
