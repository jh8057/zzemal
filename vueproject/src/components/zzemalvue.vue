<template>
  <div>
    <br>
    <hr>
    From Here, zzemalvue components!
    <h1>{{title}}</h1>
    <p> {{name}}</p>
    <button @click="updateName">Change</button>

    <p>header</p>
    <slot name ="header" :kossie="kossie"></slot>
    <p>Body</p>
    <slot name ="Body"></slot>
    <p>Footer</p>
  </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: false,
            default : 'default title'
        },
        name:{
            type: String,
            required: false,
            default : 'default name'
        }
    },
    data(){
        return {
            kossie : 'coder'
            // name : 'ZZEMALLLLLL',
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
