<template>
  <div class="header">
    <router-link to="/ask">ASK</router-link> |
    <router-link to="/job">JOB</router-link> |
    <router-link to="/news">NEWS</router-link>|
    <router-link to="/stock">STOCK</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: greenyellow;
  background-color: green;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: white;
}
.header a {
  color: darkblue;
}
</style>