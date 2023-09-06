import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";
import pwa from "./pwa";

const plugins: PluginOption[] = [
  solid(),
  pwa({
    manifest: manifest,
  }),
  // VitePWA({
  //   manifest: manifest,
  //   registerType: "autoUpdate",
  //   injectRegister: "auto",
  //   devOptions: {
  //     enabled: false,
  //   },
  //   workbox: {
  //     clientsClaim: true,
  //     cleanupOutdatedCaches: false,
  //     skipWaiting: true,
  //     sourcemap: true,
  //     maximumFileSizeToCacheInBytes: 3000000,
  //     globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,json}"],
  //   },
  // }),
];

export default plugins;
