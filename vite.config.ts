import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["vite.svg", "/icons/*.*"],
      manifest: {
        name: "PWA Application",
        short_name: "PWA",
        description: "PWA application with Offline support",
        theme_color: "#0f62fe",
        icons: [
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/icons/512.png",
            sizes: "512x512",
            form_factor: "wide",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
  envDir: "env/",
  envPrefix: "PWA_",
});
