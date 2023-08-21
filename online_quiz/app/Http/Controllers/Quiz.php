<?php

namespace App\Http\Controllers;

use App\Models\Quizs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Quiz extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Quizs::all();
        return response($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = Auth::id();
        $data = $request->validate([
            'title' => 'required|string',
            'time' => 'required',
            'questions' => 'required',
        ]);
        $quiz = Quizs::create([
            'title' => $data['title'],
            'time' => $data['time'],
            'questions' => $data['questions'],
            'user_id' => $userId,
        ]);
        return response([
            'quiz' => $quiz
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
