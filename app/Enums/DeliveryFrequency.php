<?php

namespace App\Enums;

enum DeliveryFrequency: string
{
    case Daily = "daily";
    case Weekdays = "weekdays";
    case Weekly = "weekly";
}
