<template>
  <div>
    <h1>Zzemal</h1>
    <zzemal title="title2"></zzemal>
    <form action="">
      <inputField v-mdoel="name"></inputField>
      <button>submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import zzemal from "@/components/zzemal.vue";
import inputField from "@/components/inputField.vue";
export default {
  components: {
    zzemal,
    inputField,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: red;
}
</style>
