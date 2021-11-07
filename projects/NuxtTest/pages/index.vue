<template>
  <div>
    <hello-nuxt />
    <user-name />
  </div>
</template>

<script>
import HelloNuxt from '@/components/HelloNuxt.vue'
import UserName from '@/components/UserName.vue'
export default {
  components: { HelloNuxt, UserName },
}
</script>
