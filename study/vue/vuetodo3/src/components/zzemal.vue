<template>
  <div>
      <h1>{{title}}</h1>
      <p>{{name}}</p>
      <button @click="updateName()">CHANGE</button>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:false,
            default: 'default title'
        }
    },
    data(){
        return {
            name : "WOWOW",
            }
    },
    methods: {
        updateName(){
            this.name = "CHANGED"
        }
    },

}
</script>

<style>

</style>