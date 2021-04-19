<template>
  <div>
      <h1>{{title}}</h1>
    <p> {{name}}</p>
    <button @click="updateName">Change</button>
  </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: false,
            default : 'default title'
        }
    },
    data(){
        return {
            name : 'ZZEMALLLLLL',
        } 
    },
    methods: {
        updateName(){
            this.name = 'WOW! Awesome!'
        }
    },
}
</script>

<style scoped>


</style>
