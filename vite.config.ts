import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/n-digit-keygen",
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "src/lib"),
      $app: path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    include: ["test/**/*.ts"],
  },
  plugins: [svelte()],
});
