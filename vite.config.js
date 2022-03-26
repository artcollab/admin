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
    alias: [
      { find: "#components", replacement: "/src/components" },
      { find: "@smui", replacement: "/node_modules/@smui" },
      { find: "#auth", replacement: "/src/components/Auth" },
      { find: "#navbar", replacement: "/src/components/Navbar" },
      { find: "#graph", replacement: "/src/components/Graph" },
      { find: "#progress", replacement: "/src/components/Progress" },
      { find: "#pages", replacement: "/src/pages" },
      { find: "#theme", replacement: "/src/theme" },
      { find: "#routify", replacement: "/.routify" },
      { find: "#sb", replacement: "/src/stories" },
    ],
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
      ],
      emitCss: true,
      hot: !production,
      extensions: [".md", ".svelte"],
    }),
  ],
};
