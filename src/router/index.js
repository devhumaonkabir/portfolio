import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/frontend/home/HomeComponent.vue";
import frontendRoutes from "./modules/frontendRoutes";

const baseRoutes = [
    {
        path: "/",
        name: "home",
        component: HomeComponent,
    },
];

export const routes = baseRoutes.concat(
    frontendRoutes,
);

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;
