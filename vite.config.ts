import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  build: {
    outDir: "cpanel-build",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["@tanstack/react-router", "react", "react-dom"],
  },
});
