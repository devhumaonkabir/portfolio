import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/frontend/HomeComponent.vue";

const baseRoutes = [
    {
        path: "/home",
        name: "home",
        component: HomeComponent,
    },
];

export const routes = baseRoutes.concat(
    // homeRoutes,
);

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;
