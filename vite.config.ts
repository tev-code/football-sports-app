/** @format */

import vue from "@vitejs/plugin-vue";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./tests/setup.ts", // Optional setup file
    coverage: {
      reporter: ["text", "html"],
    },
    exclude: [...configDefaults.exclude, "e2e/*"], // Exclude end-to-end tests if they exist
  },
});
