<template>
  <v-card>
    <v-list class="py-0">
      <v-card v-if="comments.length">
        <v-list class="overflow-y-auto" style="max-height: 300px">
          <template v-for="comment in comments">
            <v-list-item :key="comment.body">
              <v-list-item-avatar color="grey">
                <AppAvatar :userId="comment.userId" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ comment.body }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  user(comment.userId).name
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="comment.id"></v-divider>
          </template>
        </v-list>
      </v-card>
      <v-list-item>
        <AppCardCommentNew
          @submit="onSubmit"
          :newCommentText.sync="newCommentText"
        />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { commentsModule, usersModule } from "../store/modules";
import { Feed } from "../Models";

@Component({})
export default class AppCommentsList extends Vue {
  newCommentText = "";
  @Prop() feedId!: Feed["id"];

  get user() {
    return usersModule.getItemById;
  }

  get comments() {
    return commentsModule
      .find({
        feedId: this.feedId
      })
      .reverse();
  }
  onSubmit() {
    commentsModule.create({ body: this.newCommentText, feedId: this.feedId });
    requestAnimationFrame(() => {
      this.newCommentText = "";
    });
  }
}
</script>
