<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="">[id {{ route.id }}] study page</div>
</template>  
<script setup lang="ts">
import { useParams } from '@/hooks';


// const { params } = useRoute()

type Params = {
  id: string
}
const route = useParams<Params>()
</script>
<route lang="yaml">
  meta:
    layout: default
</route>