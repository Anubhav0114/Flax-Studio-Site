import DrawOnVue from "./pages/Draw-On.vue";
import HomeVue from "./pages/Home.vue";
import NotFoundVue from "./pages/NotFound.vue";

export const routes = [
    {path: '/:catchAll(.*)',component: NotFoundVue},
    { path: "/", name: "root", component: HomeVue },
    { path: "/draw-on", name: "Draw On", component: DrawOnVue },
    // {path:"/SignUp", name:"SignUp", component:SignUpVue}
]