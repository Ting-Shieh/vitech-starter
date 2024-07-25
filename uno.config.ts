// Copyright (c) 2024 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import {
  presetWind, 
  presetIcons, 
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    // method 2：針對全局經常需要使用的樣式
    // 'router-link': 'text-white text-xl px-8 py-2 cursor font-300 hover:font-500'
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    btn: 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer',
    "btn-plain": 'px-4 py-2 border border-sky-400 text-sky-400 cursor-pointer hover:(bg-sky-400 text-white)', // 
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties:{
        display: 'inline-block'
      },
      autoInstall: true
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      main: '#4E98F4'
    }
  }
})