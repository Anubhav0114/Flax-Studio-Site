import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DrawOnVue from "./pages/DrawOn.vue";
import DrawOnPrivacyVue from "./pages/DrawOnPrivacy.vue";
import HomeVue from "./pages/Home.vue";
import NotFoundVue from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

router.addRoute({ path: "/", name: "root", component: HomeVue, meta:{
  title: "Home - Flax studio"
}})
router.addRoute({ path: "/draw-on", name: "draw-on", component: DrawOnVue, meta:{
  title: "Draw On"
}})
router.addRoute("draw-on", { path: "privacy", component: DrawOnPrivacyVue, meta:{
  title: "Draw on - Privacy"
}})



router.addRoute({ path: '/:pathMatch(.*)*', name: 'NotFound',component: NotFoundVue})

const app = createApp(Main).use(router).mount("#app")

router.beforeEach((to, from, next) => {

  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})



