import { Module, Action } from "vuex-module-decorators";
import store from "@/store";
import { API } from "@/store/API";
import { BaseModule } from "./base.module";
import { Feed } from "@/Models";

@Module({ dynamic: true, store, name: "feeds", namespaced: true })
export class FeedModule extends BaseModule<Feed> {
  @Action({ commit: "setItems" })
  async reqItems(): Promise<any[]> {
    try {
      const { data } = await API.request<any[]>({
        url: "/feeds"
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
