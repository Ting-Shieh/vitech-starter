<template>
  <div class=""> Hello world in pages/index.vue</div>
</template>  
<script setup lang="ts">
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