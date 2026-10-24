<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the default test user.
     */
    public function run(): void
    {
        User::factory()->create([
            "first_name" => "Test",
            "last_name" => "User",
            "email" => "test@example.com",
        ]);
    }
}
