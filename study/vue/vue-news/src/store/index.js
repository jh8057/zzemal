import Vue from "vue";
import Vuex from "vuex";

import { fetchNewsList } from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList().then((res) => {
        context.commit("SET_NEWS", res.data);
        console.log(res);
      });
    },
  },
});
