<template>
  <div class="icon-wrapper">
    <v-icon :color="iconColor">{{ icon }}</v-icon>
    <span class="icon-text">{{ label | shortenedNumber }}</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "label", "iconColor"]
};
</script>

<style lang="scss" scoped>
.icon {
  &-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-text {
    position: absolute;
    font-size: 0.9em;
    transform: translateY(-5%);
    font-size: 0.7em;
  }
}
</style>
