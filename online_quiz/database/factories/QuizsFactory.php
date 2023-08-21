<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quizs>
 */
class QuizsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'image' => $this->faker->imageUrl(),
            'time' => $this->faker->randomNumber(2),
            'questions' => $this->faker->randomNumber(2),
            'user_id' => $this->faker->randomNumber(1)
        ];
    }
}
