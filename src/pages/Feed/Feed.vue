<template>
  <div>
    Feed: {{ feedId }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["feedId"]
};
</script>

<style></style>
