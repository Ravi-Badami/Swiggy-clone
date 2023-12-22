import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteMockPlugin from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  // other config options
  plugins: [react({ fastRefresh: false })],

  // vite.config.js
  /** To solve the cors issue */
  server: {
    proxy: {
      "/dapi": "https://www.swiggy.com",
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(
          /^\/dapi/,
          "https://tajbite-fet2ek3ch-ravikumars-projects-4a656752.vercel.app",
        ),
      // "/mapi": "https://www.swiggy.com",
    },
  },
});
