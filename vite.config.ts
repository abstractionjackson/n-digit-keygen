import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: ["test/**/*.ts"],
  },
  plugins: [svelte()],
});
