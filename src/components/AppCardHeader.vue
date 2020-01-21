<template>
  <v-list-item :to="userProfileUrl">
    <v-list-item-avatar color="grey">
      <AppAvatar :userId="userId" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ user.name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Feed, User } from "@/Models";
import { usersModule } from "@/store/modules";

@Component({})
export default class AppCard extends Vue {
  @Prop() userId!: User["id"];
  get user() {
    return usersModule.getItemById(this.userId);
  }

  get userProfileUrl() {
    return {
      name: "UserName",
      params: { username: this.user.name.toLowerCase() }
    };
  }
}
</script>

<style></style>
