import { VueConstructor } from "vue";

export function makeFilters(Vue: VueConstructor) {
  const requireComponent = require.context("./filters", false, /[\w-]+\.ts$/);

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const name = fileName.replace(/^.\//, "").replace(/\.\w+$/, "");
    Vue.filter(name, componentConfig.default || componentConfig);
  });
}
