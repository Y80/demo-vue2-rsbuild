import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import NodePolyfillPlugin from '@rspack/plugin-node-polyfill';

export default defineConfig({
  plugins: [pluginVue2()],
  tools: {
    rspack: {
      plugins: [new NodePolyfillPlugin()],
    },
  },
})
