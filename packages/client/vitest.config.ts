import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig(({ mode }) =>({
  plugins: [
    svelte({
      extensions: ['.svelte'],
      compilerOptions: {
        dev: true,
      },
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      "__tests__/**/*.{test,spec}.{ts,js}"
    ],
    coverage: {
      reporter: ["text", "json", "html"],
      provider: 'istanbul',
      exclude: [
        'src/lib/paraglide/**',
        'src/paraglide/**',
        'node_modules/**',
        '**/*.d.ts',
      ]
    },
    watch: false,
    setupFiles: ["./setup-tests.ts"],
  },
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
      },
      conditions: mode === 'test' ? ['browser'] : [],
    }
}));