import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default ({ command }) => ({
  plugins: [react(), cssInject()],
  preview: {
    port: 7100,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/App.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
