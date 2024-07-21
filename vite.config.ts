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
// // icons 法二 -> 採用 unocss presetIcons
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
import Layouts from 'vite-plugin-vue-layouts';
import { VitePWA } from 'vite-plugin-pwa'
import { viteMockServe } from 'vite-plugin-mock'
// import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItPrism from 'markdown-it-prism'
import { unheadVueComposablesImports } from '@unhead/vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
      extensions: ['.vue', '.md'],
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
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
        'pinia',
        // // custom
        // { }
        unheadVueComposablesImports,
      ]
    }),

    Markdown({ /* options */
      headEnabled: true,
      markdownItUses: [MarkdownItPrism]
     }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/], //customLoaderMatcher 不再採用
      extensions: ['vue', 'md'], // allow auto load markdown components under `./src/components/`
      resolvers: [
        ElementPlusResolver(),
        // IconsResolver({
        //   prefix: 'icon'
        // }),
      ]
    }),
    // Icons({
    //   autoInstall: true
    // })
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({ registerType: 'autoUpdate' }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcsspxtoviewport8plugin({
  //         unitToConvert: 'px', // 須轉換的單位，默認為“px"
  //         viewportWidth: 750, // 設計稿的視窗寬度
  //         unitPrecision: 5, // 单位转换后保留的精度
  //         propList: ['*', '!font-size'], // 能转化为vw的属性列表
  //         viewportUnit: 'vw', // 希望使用的视口单位
  //         fontViewportUnit: 'vw', // 字体使用的视口单位
  //         selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  //         minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  //         mediaQuery: false, // 媒体查询里的单位是否需要转换单位
  //         replace: true, //  是否直接更换属性值，而不添加备用属性
  //         exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //         include: [/\/src\//], // 如果设置了include，那将只有匹配到的文件才会被转换
  //         landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  //         landscapeUnit: 'vw', // 横屏时使用的单位
  //         landscapeWidth: 1024, // 横屏时使用的视口宽度
  //       })
  //     ]
  //   }
  // }
})
