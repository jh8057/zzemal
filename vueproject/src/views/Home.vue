<template>
  <div>
    <h1>This is Home Page</h1>
    <p> {{name}}</p>
    <form action="">
      <inputfield v-model="name"/>
      <br><button>submit</button>
    </form>
    <zzemalvue title = "TITLE" />
  </div>
</template>

<script>
import zzemalvue from '@/components/zzemalvue.vue';
import inputfield from '@/components/inputfield.vue';
export default {
  components :{
    zzemalvue,
    inputfield
  },
  data(){
    return {
      name : '',
    }
  },
  // methods:{
  //   updateName(name){
  //     this.name=name
  //   }
  // }
}
</script>

<style scoped>

h1{
  color: green;
}

</style>
