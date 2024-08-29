/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import League from "../views/TeamLeague.vue";
import Team from "../views/TheTeam.vue";
import Login from "../views/LoginPage.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/leagues",
    name: "League",
    component: League,
    meta: { requiresAuth: true },
  },
  {
    path: "/team/:id",
    name: "Team",
    component: Team,
    props: true,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
