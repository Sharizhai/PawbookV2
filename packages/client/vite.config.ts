import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

import path from "path";

export default defineConfig({
  plugins: [paraglideVitePlugin({ project: './project.inlang', outdir: './src/paraglide' }),
    svelte({
      preprocess: sveltePreprocess()
    })
  ], 
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $components: path.resolve("./src/components"),
      $stores: path.resolve("./src/stores"),
      $utils: path.resolve("./src/utils"),
      $assets: path.resolve("./src/assets"),
      $routes: path.resolve("./src/routes"),
    }
  }
});