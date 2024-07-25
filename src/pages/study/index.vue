<template>
  <div class="pb-15">
    <!-- 推薦內容 -->
    <Container>
      <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">推薦内容</div>
    </Container>
    <Container>
      <!-- 內容 -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3
      w-full lt-sm:px-4 py-4">
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
              <div class="px-2 py-1flex items-center justify-start text-gray-500 text-xs">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端課程</span>
              </div>
              <div
                class="px-2 py-1 lg:(px-4 mb-4) flex items-center 
                justify-between text-gray-500 mb-4 
                text-xs lg:text-base"
              >
              <div>
                <span class="mr-2 text-orange">TWD {{ item.price }}</span>
                <span>{{ item.counts }}人學習</span>
              </div>
              <div class="i-mdi:cart text-base text-sky-400"></div>
            </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 每日一課 -->
    <Container>
      <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">每日一課</div>
    </Container>
    <Container class="flex-col">
      <!-- tabs -->
      <Tabs :items="['Vue', 'React', 'Java']" v-model="activeIndex"></Tabs>
      <!-- Grid -->
      <div class="grid grid-cols-2 py-4 lt-sm:px-4 sm:grid-cols-3 lg:(grid-cols-6 grid-rows-2 ) gap-3">
        <!-- 左侧 row*2 col*2 -->
        <div class="lg:(col-start-1 col-span-2 row-start-1 row-span-2)">
          <a 
            :href="item.url" 
            v-for="(item, index) in [recommend[0]]" 
            :key="index" 
            target="_blank" 
            class="flex flex-col h-full"
          >
            <Card 
              :image="item.image"
              :height="'lg:(h-65)'"
              image-type="rounded"
              :title="item.title"
              :clamp="2"
              border
              class="w-full rounded-3 flex-1 h-full flex flex-col pb-4 justify-between transition-all hover:(transform-translate-y--1 shadow-lg)"
            >
              <template #default>
                <div class="px-2 py-1flex items-center justify-start text-gray-500 text-xs">
                  <span class="mr-2">Brian</span>|
                  <span class="ml-2">前端課程</span>
                </div>
              </template>
            </Card>
          </a>
        </div>
        <!-- 右侧 8 * item -> row*2 col*4 -->
        <div v-for="(item, index) in [...recommend, ...recommend]" :key="index">
        <a :href="item.url" target="_blank" class="flex">
          <Card 
            :title="item.title" 
            :sub-title="item.title" 
            image-type="rounded"
            :image="item.image"
            border
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            height="h-30"
            title-class="py-1 px-4 text-lg"
            :clamp="2"
          >
            <template #default>
              <div class="px-2 py-1flex items-center justify-start text-gray-500 text-xs">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端課程</span>
              </div>
            </template>
          </Card>
        </a>
      </div>
      </div>
    </Container>
    <!-- 精品微課 -->
    <Container>
      <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">精品微課</div>
    </Container>
    <!-- 學習計畫 -->
    <Container>
      <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">學習計畫</div>
    </Container>
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div 
          class="w-full lt-sm:px-4 py-4
          relative h-40 flex items-center justify-center
          transition-all hover:(transform-translate-y--1 shadow-lg)
          group min-w-60"
          v-for="(item, index) in recommend" 
          :key="index"
        >
          <div 
            class="absolute w-full h-full bg-cover bg-center w-full rounded-3 overflow-hidden"
            :style="{
              'background-image': 'url(' + item.image + ')' 
            }"
          >
            <div class="bg-black bg-opacity-30 w-full h-full group-hover:display-none"></div>
          </div>
          <div class="z-30 px-4 line-clamp-3 text-base lg:text-xl text-white">{{ item.title }}</div>
        </div>
      </div>
    </Container>

    <!-- 優質專欄 -->
    <Container>
      <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">優質專欄</div>
    </Container>
    <Container>
      <!-- 內容 -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3
        w-full lt-sm:px-4 py-4">
          <a 
          :href="item.url" 
          v-for="(item, index) in [...recommend,...recommend]" 
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
                <div class="px-2 py-1flex items-center justify-start text-gray-500 text-xs">
                  <span class="mr-2">Brian</span>|
                  <span class="ml-2">前端課程</span>
                </div>
                <div
                  class="px-2 py-1 lg:(px-4 mb-4) flex items-center 
                  justify-between text-gray-500 mb-4 
                  text-xs lg:text-base"
                >
                <div>
                  <span class="mr-2 text-orange">TWD {{ item.price }}</span>
                  <span>{{ item.counts }}人學習</span>
                </div>
                <div class="i-mdi:cart text-base text-sky-400"></div>
              </div>
              </template>
            </Card>
          </a>
        </div>
    </Container>
  </div>
</template> 
<script setup lang="ts">
import bg from '@/assets/images/bg.png'
const recommend = ref([
  {
    image: bg,
    title:
      '第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！',
    comments: '9',
    url: 'https://class.imooc.com/sale/embedded',
    hours: '350 小时',
    counts: '227',
    price: ' 12999',
    originPrice: ' 14999'
  },
  {
    image: bg,
    title: '前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）',
    comments: '9',
    url: 'https://class.imooc.com/sale/fe2021',
    hours: '350 小时',
    counts: '227',
    price: ' 46660',
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
    price: ' 44290',
    originPrice: ' 5680'
  },
  {
    image: bg,
    title: '未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通',
    comments: '9',
    url: 'https://class.imooc.com/sale/newgo',
    hours: '350 小时',
    counts: '227',
    price: ' 30990',
    originPrice: ' 3888'
  }
])

const activeIndex = ref(1)
</script>
<route lang="yaml">
  meta:
    layout: default
</route>
<style scoped lang="scss">
:deep(.card){
  &:hover{
    p {
      color: white;
    }
  }
}
</style>