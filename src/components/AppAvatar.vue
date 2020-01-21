<template>
  <v-img :src="user.avatar"></v-img>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { usersModule } from "@/store/modules";
import { User } from "@/Models";

@Component({})
export default class Avatar extends Vue {
  @Prop() userId!: User["id"];
  get user() {
    return usersModule.getItemById(this.userId);
  }
}
</script>

<style></style>
