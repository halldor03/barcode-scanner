import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import MongoView from "../views/MongoView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import ShoppingView from "../views/ShoppingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/component",
      name: "component",
      component: TestView
    },
    {
      path: "/shopping",
      name: "shopping",
      component: ShoppingView
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView
    },
    {
      path: "/mongodb",
      name: "mongodb",
      component: MongoView
    }
  ]
});

export default router;
