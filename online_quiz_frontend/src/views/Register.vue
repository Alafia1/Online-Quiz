<template>

            
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="register">
        <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
            <div class="mt-2">
              <input id="name" name="name" v-model="user.name" type="name" autocomplete="name" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" v-model="user.email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" v-model="user.password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
              <label for="confirmpassword" class="block text-sm font-medium leading-6 text-gray-900">Password Confirmation</label>
            </div>
            <div class="mt-2 mb-5">
              <input id="confirmpassword" name="confirmpassword" v-model="user.password_confirmation" type="password" autocomplete="confirmpassword" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
            </div>
        </div>

        <div class="flex w-full justify-center">
            <button type="submit" class="flex w-full items-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                <LockClosedIcon class="h-5 w-5 mr-36"/>
                Sign Up
            </button>
        </div>
      </form>


    </div>
</template>
<script setup>
  import store from '../store';
  import { useRouter } from 'vue-router'
  import { LockClosedIcon } from '@heroicons/vue/24/solid';

  const router = useRouter()
  const user = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  function register(ev) {
    ev.preventDefault();
    store
      .dispatch('register', user)
      .then(()=>{
        router.push({
          name: 'Home'
        })
      })
  }

</script>