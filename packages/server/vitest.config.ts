import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig(({ mode }) =>({
  test: {
    globals: true,
    environment: 'node',
    include: [
      "__tests__/**/*.{test,spec}.{ts,js}"
    ],
    coverage: {
      reporter: ["text", "json", "html"],
      provider: 'istanbul',
      exclude: [
        'node_modules/**',
        '**/*.d.ts',
      ]
    },
    watch: false,
    setupFiles: ["./setup-tests.ts"],
  },
  resolve: {
      alias: {
        $api: path.resolve("./src/api"),
        $config: path.resolve("./src/config"),
        $db: path.resolve("./src/db"),
        $middlewares: path.resolve("./src/middlewares"),
        $routes: path.resolve("./src/routes"),
        $types: path.resolve("./src/types"),
        $utils: path.resolve("./src/utils"),
      },
      conditions: mode === 'test' ? ['browser'] : [],
    }
}));