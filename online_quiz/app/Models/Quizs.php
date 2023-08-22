<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quizs extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'time',
        'questions',
        'user_id'
    ];
}
