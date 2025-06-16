import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";

// Custom plugin to duplicate index.html for static route support
const copyHtmlPlugin = () => {
  return {
    name: "copy-html-for-static-routing",
    closeBundle() {
      const routes = [
        "research",
        "group",
        "publication",
        "teaching",
        "project",
        "gallery",
        "student_research",
      ];
      const src = path.resolve("dist/index.html");
      for (const route of routes) {
        const dest = path.resolve(`dist/${route}.html`);
        fs.copyFileSync(src, dest);
      }
    },
  };
};

export default defineConfig({
  base: "/~imon/",
  plugins: [
    react(),
    tailwindcss(),
    copyHtmlPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
});
