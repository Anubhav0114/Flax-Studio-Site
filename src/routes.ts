import DrawOnVue from "./pages/Draw-On.vue";
import HomeVue from "./pages/Home.vue";

export const routes = [
    { path: "/", name: "root", component: HomeVue },
    { path: "/draw-on", name: "Draw On", component: DrawOnVue },
    // {path:"/SignUp", name:"SignUp", component:SignUpVue}
]