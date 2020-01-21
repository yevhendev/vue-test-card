import { VuexModule, Mutation } from "vuex-module-decorators";

interface BaseItem {
  id: number;
  [x: string]: any;
}
export class BaseModule<T extends BaseItem> extends VuexModule {
  items: T[] = [];

  get find() {
    return (query: Partial<T>) =>
      this.items.filter(item =>
        Object.keys(query).every(key => item[key] === query[key])
      );
  }

  get getItemById() {
    return (id: T["id"]) =>
      this.items.find(item => item.id === id) || ({} as T);
  }

  @Mutation
  setItems(items: T[]) {
    this.items = items;
  }

  @Mutation
  addItem(item: T) {
    this.items.push(item);
  }
  @Mutation
  removeItem(item: T) {
    const idx = this.items.findIndex(({ id }) => id === item.id);
    if (idx > -1) {
      this.items.splice(idx, 1);
    }
  }
}
