<script setup lang="ts">
defineProps({
  align: {
    type: String as PropType<'vertical'|'horizanal'>
  }
})
</script>

<template>
  <div :class="['flex', {'flex-col': align === 'vertical'}]">
    <RouterLink class="item" to="/">Products</RouterLink>
    <RouterLink class="item" to="/community">Communuty</RouterLink>
    <RouterLink class="item" to="/study">Study</RouterLink>
    <RouterLink class="item" to="/about">About</RouterLink>
  </div>
</template>

<style scoped lang="scss">
// method 1: 使用transformer
.item {
  @apply relative text-red text-xl px-8 py-2 font-300 cursor-pointer lt-sm:self-start;
  &:hover {
    @apply font-500;
    &:after {
      // content: '';
      @apply content-none absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50% - 1rem)];
    }
  }
}
</style>
