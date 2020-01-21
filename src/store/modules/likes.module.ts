import { Module, Action } from "vuex-module-decorators";
import { BaseModule } from "./base.module";
import store from "@/store";
import { API } from "@/store/API";
import { Like, Feed } from "@/Models";
import { usersModule } from ".";

@Module({ dynamic: true, store, name: "likes", namespaced: true })
export class LikesModule extends BaseModule<Like> {
  get find() {
    return super.find;
  }

  @Action({ commit: "setItems" })
  async reqItems() {
    try {
      const { data } = await API.request<any[]>({
        url: "/likes"
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  @Action
  toggleLike(feedId: Feed["id"]) {
    const like = this.find({
      feedId,
      userId: usersModule.authUserId
    })[0];
    if (like) {
      this.unLikeFeed(like);
    } else {
      this.likeFeed(feedId);
    }
  }

  @Action
  async likeFeed(feedId: Feed["id"]) {
    const newLike: Partial<Like> = {
      feedId,
      userId: usersModule.authUserId
    };
    const { data } = await API.request<Like>({
      method: "POST",
      url: "/likes",
      data: newLike
    });
    this.addItem(data);
  }

  @Action
  async unLikeFeed(like: Like) {
    try {
      await API.request({
        method: "DELETE",
        url: "/likes/" + like.id
      });
      this.removeItem(like);
    } catch (error) {
      console.log(error);
    }
  }
}
