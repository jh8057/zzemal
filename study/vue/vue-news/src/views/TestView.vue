<template>
  <div>
    <h1>테스트 페이지</h1>
    <slotcomp>
      <template v-slot:one> I am One </template>
      <template v-slot:two> I am Two </template>
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