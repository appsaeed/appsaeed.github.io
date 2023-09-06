import { PluginOption } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";

const plugins: PluginOption[] = [
  solid(),
  VitePWA({
    manifest: manifest,
    manifestFilename: "appsaeed.webmanifest",
    registerType: "autoUpdate",
  }),
];

export default plugins;
