<template>
    <h1 class="text-3xl font-bold underline text-red-600 animate__animated animate__shakeX">
        Hello world!
      </h1>
      <div>
        <BeakerIcon class="h-6 w-6 text-red-500" />
        <p>...</p>
        <AtSymbolIcon class="h-5 w-5 text-red-500" />
        <RouterView />
      </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import 'animate.css';
import { BeakerIcon, AtSymbolIcon } from '@heroicons/vue/24/solid'

</script>