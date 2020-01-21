<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  usersModule,
  feedModule,
  likesModule,
  commentsModule
} from "@/store/modules";

@Component({
  components: {}
})
export default class App extends Vue {
  async mounted() {
    await usersModule.reqItems();
    await feedModule.reqItems();
    await likesModule.reqItems();
    await commentsModule.reqItems();
  }
}
</script>
