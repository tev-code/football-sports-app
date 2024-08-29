/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import League from "../views/TeamLeague.vue";
import Team from "../views/TheTeam.vue";
import Login from "../views/LoginPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/leagues", name: "League", component: League },
  { path: "/team/:id", name: "Team", component: Team, props: true },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
