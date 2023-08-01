<template>
    <div>
        <div class="m-8 border border-gray-400 border-solid rounded-lg">
            <div class=" flex-1 flex-col items-center justify-center px-3 py-3 lg:px-5">
                <div class="flex -space-x-2 overflow-hidden items-center justify-center">
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div> 
                <div class="mt-3 text-gray-700 items-center justify-center">
                    <h2 class="text-center">Vue 3 JS</h2>
                </div>
                <div class="flex py-2 w-full items-center justify-center">
                    <span>
                        <ClockIcon class="h-5 w-5 text-gray-600" />
                    </span> 
                    30 min
                </div>
                <div class="flex py-2 w-full items-center justify-center">
                    <span>
                        <QuestionMarkCircleIcon class="h-5 w-5 text-gray-600" />
                    </span> 
                    20 questions
                </div>
                <div class="flex py-6 w-full justify-center">
                    <button type="submit" class="flex w-full justify-center items-center rounded bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                        Start Quiz
                    </button>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
import { ClockIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'
</script>