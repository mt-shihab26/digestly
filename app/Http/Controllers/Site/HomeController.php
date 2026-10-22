<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    /**
     * Render the marketing home page
     */
    public function index(): View
    {
        return view("pages.home");
    }
}
