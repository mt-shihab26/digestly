<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class UnsubscribeController extends Controller
{
    /**
     * Render the marketing help page
     */
    public function index(): View
    {
        return view("pages.unsubscribe");
    }
}
