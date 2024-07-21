<!--
 Copyright (c) 2024 Ting<zsting29@gmail.com>
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-lg py-4">
    <Container class="flex-col">
      <!-- 菜單 -->
       <div class="w-full flex justify-between items-center">
        <ul class="flex justify-start flex-1">
          <li><router-link class="item" to="/">产品</router-link></li>
          <li><a class="item" href="https://www.imooc.com" target="_blank">社区</a></li>
          <li><router-link class="item" to="/study">学习</router-link></li>
          <li><router-link class="item" to="/about">关于</router-link></li>
        </ul>
        <div class="flex items-center pr-10 text-3xl z-1">
          <div class="group relative display-none">
            <div class="i-ic:baseline-wechat cursor-pointer"></div>
            <img 
              class="img1 absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded max-w-unset" 
              :src="contacts.wechat|| wechat" alt=""
            />
          </div>
          <div class="group relative">
            <div class="ml-4 i-bi:sina-weibo cursor-pointer"></div>
            <img 
              class="img2 absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded max-w-unset" 
              :src="contacts.sina|| sina" alt=""
            />
          </div>
        </div>
      </div>
      <div class="my-4 border-b-1 border-b-coolgray-600 w-full"></div>
      <!-- 介紹，聯絡，媒體，link -->
       <ul class="w-full flex justify-start mb-4">
        <li v-if="contacts">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-bi:phone mr-2"></span>
            <span class="">聯繫訊息</span>
          </div>
          <p class="">
            <a href="mailto:xxxxx@gmail.com" class="">Email: {{ contacts.email }}</a>
          </p>
          <p v-if="contacts.phone">電話: {{ contacts.phone }}</p>
          <p v-if="contacts.address">地址: {{ contacts.address }}</p>
        </li>
        <li v-if="links.length" class="ml-10">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-ph:link-light mr-2"></span>
            <span class="">社群媒體</span>
          </div>
          <p v-for="link in links" :key="link.title">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </p>
        </li>
       </ul>
      <!-- ICP 備案 -->
      <div class="w-full flex justify-center">
        Copyright © 2022-{{ new Date().getFullYear() }} 
        <a class="flex pl-2 items-center" href="https://tw.yahoo.com/" target="_blank">
          <i class="w-5 h-5 bg-contain inline-block mr-2 bg-center"></i>
          {{ icp }}</a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import wechat from '@/assets/images/wechat.jpg'
import sina from '@/assets/images/sina.jpg'
interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone?: string
  address?: string
  wechat?: string
  sina?: string
}

interface FootItem {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts?: ContactsType
}
withDefaults(defineProps<FootItem>(), {
  icp: '',
  copyRight: '',
  links: () => [
    {title:'yahoo', url:'https://tw.yahoo.com/',},
    {title:'yahoo2', url:'https://tw.yahoo.com/',},
  ],
  contacts: () => ({
    email: 'xxxxx@gmail.com',
    phone: '09xx-xxx-xxx',
    address: 'xx市xxx區xxx路xx-xx號',
    wechat: '',
    sina: '',
  })
})
</script>

<style scoped lang="scss">
i {
  background-image: url('@/assets/icons/beianicon.png');
}
.item {
  @apply px-4 text-gray-400;
}
.group{
  .img1, .img2 {
    display: none;
  }
  &:hover {
    .img1, .img2{
      display: block;
    }
  }
}

</style>