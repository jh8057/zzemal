<template>
  <div class="axiosBtns">
    <button @click="getNews">news</button>
    <div>
      <ul v-for="user in AXIOSDATA">
        UNSER_INFO
        <li>ID : {{ user.id }}</li>
        <li>TITIL :{{ user.title }}</li>
        <li>Time_ago : {{ user.time_ago }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";
export default {
  data() {
    return {
      AXIOSDATA: [],
    };
  },
  methods: {
    async getNews() {
      let data = await fetchJobsList()
        .then((res) => res.data)
        .catch((e) => console.log(e));
      console.log(data);
      this.AXIOSDATA = data;
    },
  },
};
</script>

<style>
</style>