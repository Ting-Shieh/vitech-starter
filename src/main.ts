import './assets/main.scss'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {createHead} from '@unhead/vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createHead)

app.mount('#app')
