<?php

namespace Database\Seeders;

use App\Models\Quizs;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class QuizsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Quizs::factory(5)->create();
    }
}
