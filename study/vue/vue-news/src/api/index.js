import axios from "axios";
const MYDATA = require("../../secretkey.json");
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
  MYKEY: MYDATA.stockkey,
  StockUrl: "https://api.twelvedata.com/",
};
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchStockData(COMPANY) {
  return axios.get(
    `${config.StockUrl}quote?symbol=${COMPANY}&apikey=${config.MYKEY}`
  );
}
function fetchRealStock(COMPANY) {
  return axios.get(
    `${config.StockUrl}price?symbol=${COMPANY}&apikey=${config.MYKEY}`
  );
}
function fetchStockList() {
  return axios.get(`${config.StockUrl}/stocks`);
}
export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchStockData,
  fetchRealStock,
  fetchStockList,
};
