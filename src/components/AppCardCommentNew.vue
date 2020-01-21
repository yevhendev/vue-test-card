<template>
  <v-form @submit.prevent="$emit('submit')" class="row">
    <v-text-field v-model="value">
      <v-btn icon slot="append">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, PropSync, Prop } from "vue-property-decorator";

@Component({})
export default class AppCardCommentNew extends Vue {
  @PropSync("newCommentText", { type: String }) value!: string;
}
</script>
