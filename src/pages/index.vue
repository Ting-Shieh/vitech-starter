
<template>
  <div class="pb-15">
    <Swiper :items="items" :height="`${36 * store.rate}rem`"></Swiper>
    <!-- <Card class="this" :image="bg" title="標題" sub-title="副標題" image-type="avatar" border></Card> -->
    <!-- <Card class="this" :icon="'i-mdi-home'" title="Titel"></Card> -->
     <Container>
      <!-- 標題 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
     </Container>
     <Container>
      <!-- 內容 -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3
        w-full lt-sm:px-4">
          <a 
          :href="item.url" 
          v-for="(item, index) in recommend" 
          :key="index" 
          target="_blank" 
          class="flex hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1) trasition-all"
          >
            <Card 
              :title="item.title" 
              :sub-title="item.title" 
              image-type="rounded" 
              border
              class="w-full rounded-0 card"
            >
              <template #default>
                <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">more
                  <div class="i-mdi:arrow-right-thin text-3xl"></div>
                </div>
              </template>
            </Card>
          </a>
        </div>
     </Container>
  </div>
</template>
<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
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

const recommend = ref([
  {
    image: bg,
    title:
      '第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！',
    comments: '9',
    url: 'https://class.imooc.com/sale/embedded',
    hours: '350 小时',
    counts: '227',
    price: ' 12999.00',
    originPrice: ' 14999'
  },
  {
    image: bg,
    title: '前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）',
    comments: '9',
    url: 'https://class.imooc.com/sale/fe2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4666.00',
    originPrice: ' 5980'
  },
  {
    image: bg,
    title:
      '以一线互联网公司产品标准，打造适合零基础学习的全干货Java课程。选择Java，高薪就业的第一步！',
    comments: '9',
    url: 'https://class.imooc.com/sale/java2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4429.00',
    originPrice: ' 5680'
  },
  {
    image: bg,
    title: '未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通',
    comments: '9',
    url: 'https://class.imooc.com/sale/newgo',
    hours: '350 小时',
    counts: '227',
    price: ' 3099.00',
    originPrice: ' 3888'
  }
])

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

