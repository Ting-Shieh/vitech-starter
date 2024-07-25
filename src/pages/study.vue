<template>
  <div class="flex-1 flex flex-col">
    <!-- 頭部內容 -->
    <div class="relative">
      <!-- Swiper -->
      <Swiper :items="items" :height="`${36 * store.rate}rem`"></Swiper>
      <!-- Swiper 裡面登入-->
       <div class="absolute w-full bottom-0 left-0 flex py-2 bg-gray-900 bg-opacity-40 z-20">
        <Container>
          <div class="flex justify-between w-full">
            <!-- 分類 -->
            <ul class="flex types text-white" v-if="$route.name === '/study/cart'">
              <li class="active item">購物車</li>
            </ul>
            <ul class="types flex text-white" v-else>
              <li class="item active px-4 py-1">每日一課</li>
              <li class="item">精品微課</li>
              <li class="item">學習計畫</li>
              <li class="item">優質專欄</li>
            </ul>
            <div class="flex items-center">
              <!-- 搜索 -->
               <div class="relative bg-white rounded-6 pl-4 pr-2 h-full flex items-center mr-4">
                <input type="text" placeholder="Search Class..." class="mr-2 outline-none ">
                <i class="i-ep:search this"></i>
               </div>
              <!-- 登入 -->
               <div class="text-gray-200">
                <span class="mr-2 cursor-pointer hover:text-white">登入</span>
                <span class="ml-2 cursor-pointer hover:text-white">註冊</span>
              </div>
            </div>
          </div>
        </Container>
       </div>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types';
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore';
const store = useThemeStore()

const items: SwiperItemType[] = [
  {
    image: bg,
    title: 'This is Title',
    subTitle: 'This is SubTitle',
  },
  {
    image: bg,
    title: 'This is Title 2',
    subTitle: 'This is SubTitle 2',
  },
]
</script>

<style scoped lang="scss">
.types {
  .item {
    @apply px-4 rounded-6 bg-gray-100 bg-opacity-20 mr-2 py-1 cursor-pointer;
    &:hover {
      @apply bg-white text-dark-200;
    }
  }
  .active {
    @apply bg-white text-dark-200;
  }
}
.tabs{
  .active{
    @apply text-sky-400 relative;
    &:after {
      @apply content-none absolute bg-sky-400 w-8 h-[2px] bottom-0 left-[calc(50% - 1rem)];
    }
  }

}
</style>
<route lang="yaml">
  meta:
    layout: default
  </route>