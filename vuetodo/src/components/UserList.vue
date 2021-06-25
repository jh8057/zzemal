<template>
  <div>
      User List
      <div v-for="user in users" :key="user.id">
          {{user.name}}
      </div>
  </div>
</template>

<script>
export default {
    created(){
        this.getUsers();
    },
    computed:{
        users(){
            return this.$store.state.users;
        }
    },
    methods: {
        getUsers(){
            // store 내에 action을 실행해라
            this.$store.dispatch('getUsers')
        }
    },

}
</script>

<style>

</style>