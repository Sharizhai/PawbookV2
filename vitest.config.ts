import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environmentMatchGlobs: [
      ["packages/client/**", "jsdom"],
      ["packages/server/**", "node"],
    ],
    include: [
      "packages/**/tests/**/*.{test,spec}.{ts,js}",
      "packages/**/__tests__/**/*.{ts,js}",
    ],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    watch: false,
  },
})