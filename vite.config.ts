import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      target: "vercel",
    }),
    viteReact(),
  ],
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
          },
        },
      },
    },
  },
});
