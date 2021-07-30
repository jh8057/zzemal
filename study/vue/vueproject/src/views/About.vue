<template>
  <div class="about">
    <h1>This is an about page</h1>
    <zzemalvue>
      <template #header="props">
        <h1>header! {{props.kossie}}</h1>
      </template>
      <template v-slot:Body>
        <h1>Body!</h1>
      </template>
    </zzemalvue>
  </div>
</template>

<script>
import zzemalvue from '@/components/zzemalvue.vue';
export default {
    components :{
      zzemalvue
    }
}
</script>