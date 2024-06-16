<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <h1>404</h1>
    <router-view></router-view>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>