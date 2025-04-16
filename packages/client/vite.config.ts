import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

import path from "path";

export default defineConfig({
  plugins: [svelte({
              preprocess: sveltePreprocess()
            }),
            paraglideVitePlugin({ 
              project: './project.inlang', 
              outdir: './src/lib/paraglide' 
            }),
  ], 
  resolve: {
    alias: {
      $public: path.resolve("./public"),
      $assets: path.resolve("./src/assets"),
      $lib: path.resolve("./src/lib"),
      $pages: path.resolve("./src/pages"),
      $services: path.resolve("./src/services"),
      $stores: path.resolve("./src/stores"),
      $utils: path.resolve("./src/utils"),
      $components: path.resolve("./src/components"),
    }
  }
});