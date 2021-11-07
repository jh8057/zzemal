<template>
  <div>
    <h1>User Name</h1>
    {{ name }}

    <v-btn @click="test">TEST</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'www',
      text: 'text',
    }
  },
  methods: {
    test() {
      this.name = 'change Name'
    },
  },
}
</script>
