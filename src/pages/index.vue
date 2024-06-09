<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

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
</script>