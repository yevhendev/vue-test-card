import { Module, Action } from "vuex-module-decorators";
import { BaseModule } from "./base.module";
import store from "@/store";
import { API } from "@/store/API";
import { User } from "@/Models";

@Module({ dynamic: true, store, name: "users", namespaced: true })
export class UsersModule extends BaseModule<User> {
  authUserId = 1;

  get find() {
    return super.find;
  }

  get getItemById() {
    return super.getItemById;
  }

  @Action({ commit: "setItems" })
  async reqItems() {
    try {
      const { data } = await API.request<any[]>({
        url: "/users"
      });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
