<template>
    <div class="m-10 border border-gray-400 border-solid rounded-lg">
        <div class="flex flex-row">
            <div class=" basis-1/2 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img class="mx-auto h-10 w-auto" src="../assets/images/icon.jpg" alt="Your Company" />
                  <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
            
                <RouterView />
              </div>
            <div class="basis-1/2">
                <img class="rounded-r-lg min-h-full" src="../assets/images/login.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
</script>