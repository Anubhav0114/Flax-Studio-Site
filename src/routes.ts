import DrawOnVue from "./pages/DrawOn.vue";
import DrawOnPrivacyVue from "./pages/DrawOnPrivacy.vue";
import HomeVue from "./pages/Home.vue";
import NotFoundVue from "./pages/NotFound.vue";

export const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound',component: NotFoundVue},
    { path: "/", name: "root", component: HomeVue },
    { path: "/draw-on", name: "Draw On", component: DrawOnVue },
    { path: "/draw-on/privacy", name: "Draw On Privacy", component: DrawOnPrivacyVue },
    // {path:"/SignUp", name:"SignUp", component:SignUpVue}
]