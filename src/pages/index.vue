<template>
  <div class=""> Hello world in pages/index.vue</div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <RouterLink to="/">home</RouterLink>
  <br/>
  <RouterLink to="/about">about</RouterLink>
</template>  
<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
const msg =ref()
</script>