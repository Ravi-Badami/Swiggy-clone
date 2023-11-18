import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // other config options
  plugins: [react({ fastRefresh: false })],
});
