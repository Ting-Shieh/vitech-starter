<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div :class="cardClass">
    <div v-if="image" :class="imageClass" :style="{backgroundImage: `url(${image})`}"></div>
    <div v-else :class="[icon, 'w-20 h-20']"></div>
    <div v-if="title || subTitle" :class="titleCls">
      <p class="text-lg text-dark-300 text-bold pb-2">{{ title }}</p>
      <p class="text-sm text-dark-100 font-300">{{ subTitle }}</p>
    </div>
    <slot :item="{image, icon, title, subTitle, url}"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  icon: String,
  title: String,
  titleClass: String,
  subTitle: String,
  url: String,
  border: Boolean,
  imageType: {
    type: String as PropType<'default' | 'rounded' | 'avatar'>,
    default: 'default'
  },
})

const cardClass = computed(() => {
  // ['flex flex-col w-80', { 'items-start p-4': icon }]
  let defaultClass = 'flex flex-col w-80'
  if (props.icon) {
    defaultClass += ' items-start p-4'
  }
  if (props.imageType === 'rounded') {
    defaultClass += ' rounded overflow-hidden'
  } else if (props.imageType === 'avatar') {
    defaultClass += ' relative mt-10'
  }
  if (props.border) {
    defaultClass += ' border border-gray-300'
  }
  return defaultClass
})

const imageClass = computed(() => {
  const defaultClass = 'bg-image ' //'img bg-image '
  if (!props.title && !props.subTitle && props.imageType === 'rounded') {
    return defaultClass + 'h-60 rounded'
  } else if (props.imageType === 'avatar') {
    return defaultClass + 'h-20 w-20 rounded-1/2 self-center absolute top-0 translate-y--1/2'
  }
  return defaultClass + 'h-40'
})

const titleCls = computed(() => {
  const defaultClass = `flex flex-col items-start px-2 py-1 lg:p-4 ${props.titleClass} `
  if (props.imageType === 'avatar') {
    return defaultClass + ' pt-15'
  }
  return defaultClass
})
</script>

<style scoped></style>