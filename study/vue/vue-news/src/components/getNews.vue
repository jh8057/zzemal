<template>
  <div class="axiosBtns">
    <button @click="getNews">news</button>
    <div>
      <ul v-for="user in AXIOSDATA">
        UNSER_INFO
        <li>ID : {{ user.id }}</li>
        <li>TITIL :{{ user.title }}</li>
        <li>USER : {{ user.user }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";
export default {
  data() {
    return {
      AXIOSDATA: [],
    };
  },
  methods: {
    async getNews() {
      let data = await fetchNewsList()
        .then((res) => res.data)
        .catch((e) => console.log(e));
      this.AXIOSDATA = data;
    },
  },
};
</script>

<style>
</style>