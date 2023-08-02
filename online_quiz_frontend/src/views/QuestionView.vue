<template>
  <div class="m-10 border border-gray-400 border-solid rounded-lg">
    <div class="flex flex-row">
      <div class=" basis-1/2 flex">
        Here We go
      </div>
      <div class="basis-1/2 flex">
        Time Remaining
      </div>
      <div class="mt-4 mr-3 flex">
        <button
          type="button"
          class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          @click="saveAnswerAndNext"
        >
          {{ button }}
        </button>
      </div>
    </div>
    <h1>Name</h1>
    <hr />
    <div class="flex flex-row">
        <div class=" basis-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ currentQuestion.question }}</h2>
            </div>
        
        </div>
        <div class="basis-1/2">
          <div class="w-full px-4 py-16">
            <div class="mx-auto w-full max-w-md">
              <RadioGroup v-model="selectedAnswer">
                <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                <div class="space-y-2">
                  <RadioGroupOption
                    as="template"
                    v-for="item in currentQuestion.options"
                    :key="item.id"
                    :value="item"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active
                          ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                          : '',
                        checked ? 'bg-gray-900 bg-opacity-75 text-white ' : 'bg-white ',
                      ]"
                      class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <div class="text-sm">
                            <RadioGroupLabel
                              as="p"
                              :class="checked ? 'text-white' : 'text-gray-900'"
                              class="font-medium"
                            >
                              {{ item.option }}
                            </RadioGroupLabel>
                          </div>
                        </div>
                        <div v-show="checked" class="shrink-0 text-white">
                          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <circle
                              cx="12"
                              cy="12"
                              r="12"
                              fill="#fff"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M7 13l3 3 7-7"
                              stroke="#fff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
    </div>
</div>
  
  
  
  
</template>
  
<script setup>
  import { ref } from 'vue'
  import { onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex';
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  } from '@headlessui/vue'
  

  const store = useStore();
  const router = useRouter()
  
  

  const questions = computed(() => store.state.question); 

  const currentQuestionIndex = computed(() => store.state.currentQuestionIndex);
  const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
  const selectedAnswer = computed({
    get: () => currentQuestion.value.selectedAnswer,
    set: (value) => {
      store.commit('selectAnswer', { questionIndex: currentQuestionIndex.value, answer: value });
    },
  });
  const button = computed(() => (currentQuestionIndex.value == questions.value.length-1) ? "Finish" : "Next" )

  const saveAnswerAndNext = () => {
    console.log(questions.value.length)
    if (currentQuestionIndex.value == 2) {
      store.commit('nextQuestion');
    }
    else if (currentQuestionIndex.value < questions.value.length - 1) {
      store.commit('nextQuestion');
    } 
    else{
      store.commit('finish');
      router.push({
          name: 'Course'
        })
    }
  };
</script>
  