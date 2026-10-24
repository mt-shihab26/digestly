<?php

namespace App\Models;

use App\Enums\DeliveryFrequency;
use Database\Factories\UserFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\PasskeyAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticatable;

/**
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property array<int, string>|null $topics
 * @property array<int, string>|null $feeds
 * @property DeliveryFrequency|null $digest_frequency
 * @property string|null $digest_time
 * @property string|null $timezone
 * @property Carbon|null $onboarded_at
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable([
    "first_name",
    "last_name",
    "email",
    "password",
    "topics",
    "feeds",
    "digest_frequency",
    "digest_time",
    "timezone",
    "onboarded_at",
])]
#[Hidden(["password", "two_factor_secret", "two_factor_recovery_codes", "remember_token"])]
class User extends Authenticatable implements MustVerifyEmail, PasskeyUser
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, PasskeyAuthenticatable, TwoFactorAuthenticatable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            "email_verified_at" => "datetime",
            "password" => "hashed",
            "two_factor_confirmed_at" => "datetime",
            "topics" => "array",
            "feeds" => "array",
            "digest_frequency" => DeliveryFrequency::class,
            "onboarded_at" => "datetime",
        ];
    }

    /**
     * Get the display name shown when registering a passkey
     */
    public function getPasskeyDisplayName(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Determine if the user has verified their email address, treating everyone as verified while verification is turned off.
     */
    public function hasVerifiedEmail(): bool
    {
        return ! config("auth.verify_email") || parent::hasVerifiedEmail();
    }
}
