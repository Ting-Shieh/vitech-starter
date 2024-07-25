<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <ul class="tabs flex w-full ">
    <li 
      :class="['px-4 py-2 cursor-pointer',{active: index === activeIndex}]" 
      v-for="(item, index) in items" 
      :key="index"
      @click="activeIndex = index"
    >{{ item }}</li>
  </ul>
</template>

<script setup lang="ts" generic="T">
import type { PropType } from 'vue';

defineProps({
  items: {
    type: Array as PropType<T[]>,
    default: () => []
  },
  // activeIndex: {
  //   type: Number,
  //   default: 0
  // }
})

const activeIndex = defineModel<number>({
  default: 0,
})
</script>

<style scoped lang="scss">
.tabs{
  .active{
    @apply text-sky-400 relative;
    &:after {
      @apply content-none absolute bg-sky-400 w-8 h-[2px] bottom-0 left-[calc(50% - 1rem)];
    }
  }

}
</style>