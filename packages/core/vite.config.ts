import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "core",
      fileName: "index.js",
    },
    rollupOptions: {
      external: ["react"],
      output: {},
    },
  },
});
