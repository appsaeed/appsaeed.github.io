import { PluginOption } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";

const plugins: PluginOption[] = [
  solid(),
  VitePWA({
    manifest: manifest,
    buildBase: "./",
    registerType: "autoUpdate",
    workbox: {
      cacheId: "saeed_cache",
      runtimeCaching: [
        {
          urlPattern: /\/(asc|ftools|static|iptv-view)\/.*/g,
          handler: "NetworkOnly",
        },
      ],
    },
  }),
];

export default plugins;
