<!-- eslint-disable vue/valid-v-model -->
<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  
  <div class="bg-gray-100">
      <div class="bg-white py-10 mb-4">
        <Container>
          <!-- 內容區域 -->
          <div class="flex w-full">
            <!-- 課程介紹 -->
            <div class="bg w-1/2"></div>
            <!-- 左圖 右文檔 -->
            <div class="w-1/2">
              <div class="text-3xl">課程 Name</div>
              <div class="text-gray-300 mb-4 line-clamp-2">
                課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc
                課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc
                課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc
                課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc課程Desc
              </div>
              <div class="flex text-sm mb-4">
                <span class="pr-2">老師</span>
                <span class="pl-2">老師標籤</span>
              </div>
              <div class="text-orange-400 mb-8 text-2xl">
                TWD ?????
              </div>
              <div class="flex">
                <div class="btn mr-4">加入購物車</div>
                <div class="btn-plain px-10">收藏</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <!-- 課程詳情 -->
        <div class="w-full flex mb-4">
          <div class="w-[calc(75%-1rem)] bg-white mr-4">
            <!-- tabs -->
            <div class="border-b-1 border-b-color-gray-300 ">
              <Tabs :items="['課程介紹', '章節目錄', '學員評價']" v-model="activeIndex"></Tabs>
              <!-- tabs title -->
            </div>
            <!-- tabs content -->
            <div class="p-4">
              <!-- 左邊Markdown的詳情 -->
              <RouterView></RouterView>
              <!-- 課程目錄 -->
              <!-- 評價 -->
            </div>
          </div>
          <!-- 右邊側邊欄 -->
          <div class="w-1/4">
            <div class="bg-white mb-2 h-120">邊欄</div>
            <div class="bg-white mb-2 last:mb-0 h-120">邊欄</div>
          </div>
        </div>
      </Container>
    </div>
</template>  
<script setup lang="ts">
import { useParams } from '@/hooks';
const activeIndex = ref(0)

provide('activeIndex', activeIndex)

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