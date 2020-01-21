import { makeFilters } from "./filters";
import { VueConstructor } from "vue";

export function makePlugins(Vue: VueConstructor) {
  makeFilters(Vue);
}
