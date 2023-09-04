import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import solid from "vite-plugin-solid";
let env: NodeJS.ProcessEnv & Record<string, string>;
try {
  env = Object.assign(process.env, loadEnv("mock", process.cwd(), ""));
} catch (error) {}

const manifest: Partial<ManifestOptions> = {
  name: env.VITE_NAME || "app name",
  short_name: "Appsaeed",
  description: env.VITE_DESCRIPTION || "App description",
  theme_color: "#0f172a",
  background_color: "#1e293b",
  display: "standalone",
  scope: "./",
  start_url: "./",
  icons: [
    {
      src: "/icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-128x128.png",
      sizes: "128x128",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable any",
    },
  ],
};

export default defineConfig({
  plugins: [
    solid(),
    VitePWA({
      manifest: manifest,
      // strategies: "injectManifest",
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: false,
      },
      workbox: {
        clientsClaim: true,
        cleanupOutdatedCaches: false,
        skipWaiting: true,
        sourcemap: true,
        maximumFileSizeToCacheInBytes: 3000000,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,json}"],
      },
    }),
  ],
  server: {
    port: Number(env.VITE_PORT) || 3000,
  },
  // base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]_[hash].js`,
        chunkFileNames: `[name]_chunk_[hash].js`,
        assetFileNames: `[name]_[hash].[ext]`,
      },
      plugins: [
        {
          name: "404-html",
          async writeBundle(options) {
            const indexHtmlPath = resolve(options.dir, "index.html");
            const buildIndexHtmlPath = resolve(options.dir, "404.html");
            try {
              const indexHtmlContent = await readFile(indexHtmlPath, "utf-8");
              await writeFile(buildIndexHtmlPath, indexHtmlContent);
            } catch (error) {
              console.error("Error duplicating index.html:", error);
            }
          },
        },
      ],
    },
  },
  preview: {
    port: 3300,
  },
});
