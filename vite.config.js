import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// By default, all icons on PWA Web App Manifest option found under Vite's publicDir option directory, will be included in the service worker precache. You can disable this option using includeManifestIcons: false.
// You can also add another static assets such as favicon, svg and font files using includeAssets option. The includeAssets option will be resolved using fast-glob found under Vite's publicDir option directory, and so you can use regular expressions to include those assets, for example: includeAssets: ['fonts/*.ttf', 'images/*.png']. You don't need to configure PWA Manifest icons on includeAssets option.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Manifest generator: https://www.simicart.com/manifest-generator.html/
      // Create icons: https://realfavicongenerator.net/ or https://tools.crawlink.com/tools/pwa-icon-generator/ or pwa-asset-generator npm package
      // Best option to generate assets for Vite PWA seems to be to just use the official Vite one => @vite-pwa/assets-generator npm package
      // add this to cache all the imports
      // Without this the images will not be cached, if you want for everything to be cached and be fully available offline you need to add the workbox and includeAssets properties
      // If you dont want to cache everything you can adjust the globs accordingly
      workbox: {
        // By default precache manifest includes js, css and html files, if you need to add additional files to the precache you have to define them in the globPatters
        // Example below shows adding ico, png and svg files to precache as well, together with js, css and html files
        // globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      //   Your application Web App Manifest must have the following entries:
      // a scope: omitted here for simplicity, the vite-plugin-pwa plugin will use the Vite base option to configure it (default is /)
      // a name
      // a short description
      // a description
      // a theme_color: must match the configured one on Entry Point theme-color
      // an icon with 192x192 size
      // an icon with 512x512 size
      // For mask-icon in the entry point, use the svg or the png used to generate the favicon package.
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
          // {
          //   src: "/icon-192x192.png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },
          // // {
          // //   src: "/icon-256x256.png",
          // //   sizes: "256x256",
          // //   type: "image/png",
          // // },
          // {
          //   src: "/icon-384x384.png",
          //   sizes: "384x384",
          //   type: "image/png",
          // },
          // {
          //   src: "/icon-512x512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
          // After using @vite-pwa/assets-generator
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      //  /* enable sw on development */
      //  devOptions: {
      //   enabled: true
      //   /* other options */
      // }
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
