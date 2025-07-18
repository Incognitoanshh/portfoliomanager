import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["portfolio.local"],
    hmr: {
      host: "portfolio.local",
    },
    port: 5173,
    proxy: {
      "/api": {
        target: "http://backend:3000",
        changeOrigin: true,
      },
    },
  },
});
