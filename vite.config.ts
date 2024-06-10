import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router', // 替換原本的
        VueRouterAutoImports,
        '@vueuse/core',
        // // custom
        // { }
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
