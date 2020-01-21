<template>
  <v-row>
    <v-col>
      <template v-if="feeds.length">
        <AppCard v-for="feed in feeds" :key="feed.id" :feed="feed" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { feedModule } from "@/store/modules";

@Component({})
export default class IndexPage extends Vue {
  get feeds() {
    return feedModule.items;
  }
}
</script>

<style></style>
