<template>
  <div style="max-width:344px" class="mx-auto mb-5">
    <v-card class="mb-1">
      <AppCardHeader :userId="feed.authorId" />
      <router-link
        :to="{ name: 'Feed', params: { feedId: feed.id } }"
        class="decoration-none"
      >
        <v-img :src="feed.image" height="194">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="body-1">{{ feed.title }}</div>
            </v-col>
          </v-row>
        </v-img>
      </router-link>

      <v-list-item>
        <v-card-text>{{ feed.price.value | currency(feed.price) }}</v-card-text>
        <v-spacer></v-spacer>
        <v-btn icon @click="onToggleCommentsVisibility">
          <AppIconWithNumber v-bind="commentData" />
        </v-btn>
        <v-btn icon @click="onToggleLike">
          <AppIconWithNumber v-bind="likeData" />
        </v-btn>
      </v-list-item>
    </v-card>
    <AppCommentsList v-if="showComments" :feedId="feed.id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import { Feed } from "@/Models";
import { usersModule, likesModule, commentsModule } from "@/store/modules";

@Component({})
export default class AppCard extends Vue {
  showComments = false;
  @Prop() feed!: Feed;

  get commentData() {
    return {
      label: this.feedComments.length,
      icon: "mdi-chat-outline"
    };
  }
  get feedComments() {
    return commentsModule.find({
      feedId: this.feed.id
    });
  }

  get likeData() {
    return {
      label: this.feedLikes.length,
      icon: this.feedLikes.length ? "mdi-heart" : "mdi-heart-outline",
      ...(this.isYourLiked && { iconColor: "red" })
    };
  }
  get feedLikes() {
    return likesModule.find({
      feedId: this.feed.id
    });
  }
  get isYourLiked() {
    return !!likesModule.find({
      feedId: this.feed.id,
      userId: usersModule.authUserId
    }).length;
  }
  onToggleCommentsVisibility() {
    this.showComments = !this.showComments;
  }
  onToggleLike() {
    likesModule.toggleLike(this.feed.id);
  }
}
</script>

<style scope>
.decoration-none {
  text-decoration: none;
}
</style>
