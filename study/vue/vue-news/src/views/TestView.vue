<template>
  <div>
    <h1>테스트 페이지</h1>
    <slotcomp>
      <template v-slot:one="slotProps">
        I am One {{ slotProps.user.Name }}
      </template>
      <template #two="wow"> I am Two {{ wow }}</template>
      <template #three="{ wow }"> I am Three {{ wow }}</template>
    </slotcomp>
  </div>
</template>

<script>
import Slotcomp from "../components/slotcomp.vue";
export default {
  components: {
    Slotcomp,
  },
};
</script>


Slotcomp<style>
</style>