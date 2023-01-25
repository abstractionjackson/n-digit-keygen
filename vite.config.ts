import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/n-digit-keygen",
  test: {
    globals: true,
    include: ["test/**/*.ts"],
  },
  plugins: [svelte()],
});
