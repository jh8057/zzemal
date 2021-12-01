import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobView from "../views/JobView.vue";
// import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
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
  ],
});
