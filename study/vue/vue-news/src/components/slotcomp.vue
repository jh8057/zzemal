<template>
  <div>
    <h1>나는 자식 컴포넌트</h1>
    <slot name="one"></slot>{{ user.Number }}<br />
    ///////////구분선////////////<br />
    <slot name="two"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        Number: 10,
        Name: "zzemal",
      },
    };
  },
};
</script>

<style>
</style>