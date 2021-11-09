<template>
  <div>
    <h1>Get about data</h1>
    <button @click="aboutdata">about</button>
    {{ about }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      about: "",
    };
  },
  methods: {
    ...mapActions({
      getabout: "getabout",
    }),
    async aboutdata() {
      let data = await this.getabout();
      console.log(data);
      console.log("T");
      this.about = data;
    },
  },
};
</script>

<style>
</style>