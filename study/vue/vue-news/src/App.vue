<template>
  <div id="app">
    <HelloWorld />
    <router-view></router-view>
    <router-link to="/ask">ask</router-link><br />
    <router-link to="/job">job</router-link><br />
    <router-link to="/news">news</router-link>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
