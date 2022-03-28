import { appConfig } from "./package.json";
import viteMainJs from "vite-main-js";
import autoPreprocess from "svelte-preprocess";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

const { port } = appConfig;
const production = process.env.NODE_ENV === "production";
module.exports = {
  server: {
    port: port,
  },
  build: {
    polyfillModulePreload: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"],
  },
  resolve: {
    dedupe: ["@roxi/routify"],
  },
  plugins: [
    tsconfigPaths(),
    viteMainJs(),
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [],
          },
        }),
      ],
      emitCss: true,
      hot: !production,
      extensions: [".md", ".svelte"],
    }),
  ],
};
