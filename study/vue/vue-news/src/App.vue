<template>
  <div id="app">
    <!-- ctrl 누르고 바로 이동 가능 -->
    <tool-bar />
    <HelloWorld />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
/* transition FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
