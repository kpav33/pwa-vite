import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Manifest generator: https://www.simicart.com/manifest-generator.html/
      // Create icons: https://realfavicongenerator.net/ or https://tools.crawlink.com/tools/pwa-icon-generator/
      // add this to cache all the imports
      // Without this the images will not be cached, if you want for everything to be cached and be fully available offline you need to add the workbox and includeAssets properties
      // If you dont want to cache everything you can adjust the globs accordingly
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "vite test",
        description: "testing vite pwa",
        name: "vite test",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          // {
          //   src: "/icon-256x256.png",
          //   sizes: "256x256",
          //   type: "image/png",
          // },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
