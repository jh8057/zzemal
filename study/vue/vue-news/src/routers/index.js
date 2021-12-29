import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobView from "../views/JobView.vue";
import StockView from "../views/StockView.vue";
import TestView from "../views/TestView.vue";
// import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // 경로에 '#' 없애주는것
  routes: [
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/job",
      component: JobView,
    },
    {
      path: "/stock",
      component: StockView,
    },
    {
      path: "/test",
      component: TestView,
    },
  ],
});
