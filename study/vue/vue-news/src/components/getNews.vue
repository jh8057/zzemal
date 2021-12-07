<template>
  <div class="axiosBtns">
    <button @click="showNews">news</button>
    <div v-show="show">
      <ul v-for="user in this.$store.state.news">
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
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
  data() {
    return {
      //   AXIOSDATA: [],
      show: false,
    };
  },
  methods: {
    // async getNews() {
    //   let data = await fetchNewsList()
    //     .then((res) => res.data)
    //     .catch((e) => console.log(e));
    //   this.AXIOSDATA = data;
    // },
    showNews() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>