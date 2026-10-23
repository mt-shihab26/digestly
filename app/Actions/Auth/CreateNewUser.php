<?php

namespace App\Actions\Auth;

use App\Concerns\ValidationRules;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use ValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            "first_name" => $this->nameRules(),
            "last_name" => $this->nameRules(),
            "email" => $this->emailRules(),
            "password" => $this->passwordRules(),
            "terms" => ["accepted"],
        ])->validate();

        return User::create([
            "name" => trim($input["first_name"])." ".trim($input["last_name"]),
            "email" => $input["email"],
            "password" => $input["password"],
        ]);
    }
}
