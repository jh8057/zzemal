<template>
  <div>
    <hello-nuxt></hello-nuxt>
    <nuxt-link to="/GetAbout">ABOUT</nuxt-link>
  </div>
</template>

<script>
import HelloNuxt from "../components/HelloNuxt.vue";
export default {
  components: { HelloNuxt },
};
</script>
