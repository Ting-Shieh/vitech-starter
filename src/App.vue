<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './store/useThemeStore';

const themeStore = useThemeStore()
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  const contentWidth = 1200
  themeStore.$patch({
    rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
  })
})
</script>

<template>
  <RouterView />
</template>

<style >
.this {
  border: 1px solid red;
}

.this2 {
  border: 1px solid blue;
}
</style>
