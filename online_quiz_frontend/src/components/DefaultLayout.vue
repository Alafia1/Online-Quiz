<template>
    
      <RouterView />
      
        
</template>
<script setup>
import { RouterView } from 'vue-router'
import 'animate.css';
import { BeakerIcon, AtSymbolIcon } from '@heroicons/vue/24/solid'
import store from '../store';

const name = store.state.user.data.name;

</script>