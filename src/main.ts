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

router.addRoute({
  path: "/", name: "root", component: HomeVue, meta: {
    title: "Home - Flax studio"
  }
})
router.addRoute({
  path: "/draw-on", name: "draw-on", component: DrawOnVue, meta: {
    title: "Draw On"
  }
})
router.addRoute({
  path: "/draw-on/privacy", component: DrawOnPrivacyVue, meta: {
    title: "Draw on - Privacy"
  }
})



router.addRoute({ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue })

const app = createApp(Main).use(router).mount("#app")

router.beforeEach((to, from, next) => {

  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



