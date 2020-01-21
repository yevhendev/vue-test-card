import { Module, Action, Mutation } from "vuex-module-decorators";
import { BaseModule } from "./base.module";
import store from "@/store";
import { API } from "@/store/API";
import { Comment } from "@/Models";
import { usersModule } from ".";

@Module({ dynamic: true, store, name: "coments", namespaced: true })
export class CommentsModule extends BaseModule<Comment> {
  get find() {
    return super.find;
  }

  // @Mutation
  // addItem(item: Comment) {
  //   this.items.push(item);
  // }

  @Action({ commit: "setItems" })
  async reqItems() {
    try {
      const { data } = await API.request<any[]>({
        url: "/comments"
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  @Action({ commit: "addItem" })
  async create(newComment: Partial<Comment>) {
    try {
      const data: Partial<Comment> = {
        body: newComment.body,
        userId: usersModule.authUserId,
        feedId: newComment.feedId
      };
      const { data: storedComment } = await API.request<Comment>({
        method: "POST",
        url: "/comments",
        data
      });
      return storedComment;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}
