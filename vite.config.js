const { appConfig } = require("./package.json");
const viteMainJs = require("vite-main-js");
const autoPreprocess = require("svelte-preprocess");
const slug = require("remark-slug");
const { mdsvex } = require("mdsvex");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
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
    alias: [{ find: "#components", replacement: "/src/components" }],
  },
  plugins: [
    viteMainJs(),
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [],
          },
        }),
        mdsvex({
          remarkPlugins: [slug],
          layout: {
            blog: "src/components/Card.svelte",
          },
          extension: "md",
        }),
      ],
      emitCss: true,
      hot: !production,
      extensions: [".md", ".svelte"],
    }),
  ],
};
