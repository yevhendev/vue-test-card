import Vue, { VueConstructor } from "vue";
import Card from "@/components/Card.vue";

// Vue.component("Card", Card);

function registerGlobal(Vue: VueConstructor<Vue>) {
  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireComponent = require.context(
    // Look for files in the current directory
    ".",
    // Do not look in subdirectories
    false,
    // Only include "Global" prefixed .vue files
    /App[\w-]+\.vue$/
  );

  // For each matching file name...
  requireComponent.keys().forEach(fileName => {
    // Get the component config
    const componentConfig = requireComponent(fileName);
    // Get the PascalCase version of the component name
    const componentName = fileName
      // Remove the file extension from the end
      .replace(/^\.\//, "")
      .replace(/\.\w+$/, "");
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

export default registerGlobal(Vue);
