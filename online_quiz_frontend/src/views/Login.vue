<template>
    
            
    <div class="mt-8 py-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="login">
        <div v-if="errorMsg" class="flex items-center justify-between px-3 py-2 bg-red-500 text-white rounded">
          {{ errorMsg }}
          <span @click="errorMsg = ''">
            <XCircleIcon class="h-5 w-5"/>
          </span>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="user.email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" v-model="user.password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input type="checkbox" id="remember-me" v-model="user.remember" name="remember-me" class="h-4 w-4 text-gray-600" />
            <label for="remember-me" class="ml-2 block text-sm font-medium leading-6 text-gray-900">Remember Me</label>
          </div>
        </div>
        

        <div class="flex py-10 w-full justify-center">
            <button type="submit" class="flex w-full items-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                <LockClosedIcon class="h-5 w-5 mr-36"/>
                Login
            </button>
        </div>
      </form>


    </div>
              
</template>
<script setup>
import store from '../store';
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { LockClosedIcon, XCircleIcon } from '@heroicons/vue/24/solid';

let errorMsg = ref('');
const router = useRouter()
  const user = {
    email: "",
    password: "",
    remember: false,
  };

  function login(ev) {
    ev.preventDefault();
    store
      .dispatch('login', user)
      .then(()=>{
        router.push({
          name: 'Course'
        })
      })
      .catch(err => {
        errorMsg.value = err.response.data.error
      })
  }

</script>