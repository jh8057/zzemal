<template>
  <div>
    <h1>나는 자식 컴포넌트</h1>
    <slot name="one" :user="user"></slot>{{ user.Number }}<br />
    ///////////구분선////////////<br />
    <slot name="two" :wow="wow"></slot><br />
    ///////////구분선////////////<br />
    <slot name="three" :wow="wow"></slot>
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
      wow: 120,
    };
  },
};
</script>

<style>
</style>