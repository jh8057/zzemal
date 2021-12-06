<template>
  <div id="app">
    <!-- ctrl 누르고 바로 이동 가능 -->
    <tool-bar />
    <HelloWorld />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    HelloWorld,
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0;
}
</style>
