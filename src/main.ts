import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue'
import { routes } from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(Main).use(router).mount("#app")



