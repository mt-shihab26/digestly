<?php

namespace App\Http\Requests\App\Settings;

use App\Concerns\ValidationRules;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    use ValidationRules;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "first_name" => $this->nameRules(),
            "last_name" => $this->nameRules(),
            "email" => $this->emailRules($this->user()->id),
        ];
    }
}
