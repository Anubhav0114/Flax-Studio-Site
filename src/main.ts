import { createApp } from 'vue'
import './style.css';
import Main from './Main.vue';
import { createRouter, createWebHistory } from 'vue-router'
import DrawOnVue from "./pages/DrawOn.vue";
import WordSearchVue from "./pages/WordSearch.vue";
import DrawOnPrivacyVue from "./pages/Privacy/DrawOnPrivacy.vue";
import WordSearchPrivacyVue from "./pages/Privacy/WordSearchPrivacy.vue";
import HomeVue from "./pages/Home.vue";
import NotFoundVue from "./pages/NotFound.vue";
import ProfileNiteshVue from "./pages/Profiles/ProfileNitesh.vue";
import ProfileSayam from './pages/Profiles/ProfileSayam.vue';
import ProfileAnubhavVue from "./pages/Profiles/ProfileAnubhav.vue";

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

router.addRoute({
  path: "/word-search", component: WordSearchVue, meta: {
    title: "Word Search"
  }
})
router.addRoute({
  path: "/word-search/privacy", component: WordSearchPrivacyVue, meta: {
    title: "Word Search - Privacy"
  }
})

router.addRoute({
  path: "/profile-nitesh", component: ProfileNiteshVue, meta: {
    title: "Profile - Nitesh Kr"
  }
})
router.addRoute({
  path: "/profile-sayam", component: ProfileSayam, meta: {
    title: "Profile - Sayam Sr."
  }
})

router.addRoute({
  path: "/profile-anubhav", component: ProfileAnubhavVue, meta: {
    title: "Profile - Anubhav Jr."
  }
})





router.addRoute({ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue, meta:{
  title: "404 - Not Found"
} })

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



