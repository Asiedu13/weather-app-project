import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: "./app/test/utilities.js",
    environmentMatchGlobs: [["**/*.test.jsx", "happy-dom"]],
  },
});
