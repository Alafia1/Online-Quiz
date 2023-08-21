<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-800">Add New Quiz</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl">
            <div class="m-5 lg:mt-20 sm:mt-3 sm:mx-3 lg:mx-16 xsm:mx-3">
                <div>
                    <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Quiz Title</label>
                    <div class="mt-2">
                    <input id="title" name="title" v-model="quiz.title" type="name" autocomplete="title" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Time Limit (mins)</label>
                    <div class="mt-2">
                    <input id="time" name="time" v-model="quiz.time" type="number" autocomplete="time" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="questions" class="block text-sm font-medium leading-6 text-gray-900">Number of Questions to be answered</label>
                    <div class="mt-2">
                    <input id="questions" name="questions" v-model="quiz.questions" type="number" autocomplete="questions" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="flex mt-8 py-6 w-full justify-center">
                    <button @click="save" class="flex w-full justify-center items-center rounded bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                        Save
                    </button>
                    
                </div>
            </div>
        </div>
      </main>
</template>

<script setup>
  import store from '../store';
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const quiz = {
    title: "",
    time: "",
    questions: "",
  };

  function save() {
    store.dispatch('addQuiz', quiz)
    .then(()=>{
        router.push({
          name: 'Course'
        })
      });
  }

</script>