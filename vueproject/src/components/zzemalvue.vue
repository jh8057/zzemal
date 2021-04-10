<template>
  <div>
    <p> {{name}}</p>
    <button @click="updateName">Change</button>
  </div>
</template>

<script>
export default {
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
