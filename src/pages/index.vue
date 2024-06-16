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
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600 * 1000)
    }
  })
})
</script>
<route lang="yaml">
  meta:
    layout: default
</route>