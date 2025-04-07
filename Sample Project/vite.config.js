import { defineConfig } from "vite";
import { resolve } from "path";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import manipulateResourses from "./vite-manipulate-resourses";

export default defineConfig({
  plugins: [
    portalLiveReload(),
    directoryPlugin({ baseDir: __dirname }),
    manipulateResourses(),
  ],
  base:
    process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "./",
  root: "",
  build: {
    outDir: resolve(__dirname, "./assets"),
    emptyOutDir: true,
    manifest: true,
    target: "es2018",

    rollupOptions: {
      input: {
        theme: resolve(__dirname + "/src/main.js"),
      },
      external: ["jquery"],
      exports: "named",
      output: {
        format: "cjs",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        globals: {
          jquery: "$",
        },
      },
    },
    minify: true,
    write: true,
  },
  server: {
    cors: true,
    strictPort: true,
    port: 5000,
    https: false,
    hmr: {
      host: "localhost",
    },
    watch: {
      ignored: ["**/*.html"],
    },
  },
});
