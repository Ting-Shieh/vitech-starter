// Copyright (c) 2024 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import {presetWind, presetIcons} from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties:{
        display: 'inline-block'
      }
    })
  ],
})