<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-800">Courses</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl">
            <div class="m-5 border border-gray-400 border-solid rounded-lg">
                <div class="flex flex-row">
                    <!-- Card -->
                    <div v-for="quiz in quizs" :key="quiz.id">
                        <div class="m-8 border border-gray-400 border-solid rounded-lg">
                            <div class=" flex-1 flex-col items-center justify-center px-3 py-3 lg:px-5">
                                <div class="flex -space-x-2 overflow-hidden items-center justify-center">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="@/assets/images/vue.jpg" alt="" />
                                </div> 
                                <div class="mt-3 text-gray-700 items-center justify-center">
                                    <h2 class="text-center">{{ quiz.title }}</h2>
                                </div>
                                <div class="flex py-2 w-full items-center justify-center">
                                    <span>
                                        <ClockIcon class="h-5 w-5 text-gray-600" />
                                    </span> 
                                    {{ quiz.time }} min
                                </div>
                                <div class="flex py-2 w-full items-center justify-center">
                                    <span>
                                        <QuestionMarkCircleIcon class="h-5 w-5 text-gray-600" />
                                    </span> 
                                    <p>{{ quiz.question }} questions</p>
                                </div>
                                <div class="flex py-6 w-full justify-center">
                                    <button @click="openModal(quiz.id)" class="flex w-full justify-center items-center rounded bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                        Start Quiz
                                    </button>
                                </div>
                                <TransitionRoot appear :show="isOpen" as="template">
                                    <Dialog as="div" @close="closeModal" class="relative z-10">
                                      <TransitionChild
                                        as="template"
                                        enter="duration-300 ease-out"
                                        enter-from="opacity-0"
                                        enter-to="opacity-100"
                                        leave="duration-200 ease-in"
                                        leave-from="opacity-100"
                                        leave-to="opacity-0"
                                      >
                                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                                      </TransitionChild>
                                
                                      <div class="fixed inset-0 overflow-y-auto">
                                        <div
                                          class="flex min-h-full items-center justify-center p-4 text-center"
                                        >
                                          <TransitionChild
                                            as="template"
                                            enter="duration-300 ease-out"
                                            enter-from="opacity-0 scale-95"
                                            enter-to="opacity-100 scale-100"
                                            leave="duration-200 ease-in"
                                            leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95"
                                          >
                                            <DialogPanel
                                              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                            >
                                              <DialogTitle
                                                as="h3"
                                                class="text-lg font-medium leading-6 text-gray-900"
                                              >
                                                Payment successful
                                              </DialogTitle>
                                              <div class="mt-2">
                                                <p class="text-sm text-gray-500">
                                                  Your payment has been successfully submitted. We’ve sent you
                                                  an email with all of the details of your order.
                                                </p>
                                              </div>
                                
                                              <div class="mt-4 ">
                                                <button
                                                  type="button"
                                                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                  @click="closeModal"
                                                >
                                                  Got it, thanks!
                                                </button>
                                              </div>
                                            </DialogPanel>
                                          </TransitionChild>
                                        </div>
                                      </div>
                                    </Dialog>
                                  </TransitionRoot>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
        
    
      
</template>

<script setup>
import QuizCard from '../components/QuizCard.vue';
import { useRouter } from 'vue-router'
import { ClockIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import store from "../store"
      import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
      } from '@headlessui/vue'
      
      const router = useRouter()
      const isOpen = ref(false)
      
      function closeModal() {
        isOpen.value = false;
        store.commit('setQuestion')
        router.push({
          name: 'Question'
        }).then(() => {
            console.log('Navigation successful!');
        })
        .catch((error) => {
            console.error('Navigation failed:', error);
        });
        
      }
      function openModal(index) {
        isOpen.value = true;
        store.state.course = index;
      }


      const quizs = store.state.quiz;

</script>