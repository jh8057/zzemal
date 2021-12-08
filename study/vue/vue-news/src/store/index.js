import Vue from "vue";
import Vuex from "vuex";

import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchStockData,
  fetchRealStock,
  fetchStockList,
} from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    stocks: [],
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    PUT_STOCK(state, data) {
      state.stocks.push(data);
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList().then((res) => {
        context.commit("SET_NEWS", res.data);
        console.log(res);
      });
    },
    GET_STOCK(context, data) {
      fetchStockData(data).then((res) => {
        context.commit("PUT_STOCK", res.data);
      });
    },
    async GET_STOCK2(context, data) {
      let result = fetchStockData(data);
      return result;
    },
    async GET_STOCK3(context, data) {
      let result = fetchRealStock(data);
      return result;
    },
    async GET_STOCKLIST() {
      let result = fetchStockList();
      return result;
    },
  },
});
