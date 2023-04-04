import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue'
import { routes } from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(Main).use(router).mount("#app")



