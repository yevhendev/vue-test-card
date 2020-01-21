<template>
  <div>
    User: {{ username }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["username"]
};
</script>

<style></style>
