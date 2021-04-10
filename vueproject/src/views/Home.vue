<template>
  <div>
    <h1>This is Home Page</h1>
    <p> {{name}}</p>
    <zzemalvue></zzemalvue>
  </div>
</template>

<script>
import zzemalvue from '@/components/zzemalvue.vue';
export default {
  components :{
    zzemalvue
  },
  data(){
    return {
      name : 'ZZEMAL'
    }
  }
}
</script>

<style scoped>

h1{
  color: green;
}

</style>
