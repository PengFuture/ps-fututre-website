import {createRouter, createWebHistory} from "vue-router";

import Login from "../views/login/login.vue";

const routes = [
    {
        path: "/",
        name: "首页",
        component: Login,
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login/login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
