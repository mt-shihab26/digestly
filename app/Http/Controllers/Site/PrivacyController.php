<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class PrivacyController extends Controller
{
    /**
     * Render the marketing help page
     */
    public function index(): View
    {
        return view("pages.privacy");
    }
}
