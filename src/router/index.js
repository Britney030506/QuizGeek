import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/QuizHome.vue";
import Questions from "../views/Questions.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/questions",
        name: "Questions",
        component: Questions,
    },


];

export const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

