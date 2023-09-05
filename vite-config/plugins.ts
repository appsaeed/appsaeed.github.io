import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";

//create link tag from manifest images
const appendIcons = [];
manifest.icons.forEach((icon) => {
  appendIcons.push({
    injectTo: "head",
    tag: "link",
    attrs: {
      rel: "icon",
      href: icon.src,
      type: icon.type,
      sizes: icon.sizes,
    },
  });
});

const plugins: PluginOption[] = [
  solid(),
  // createHtmlPlugin({
  //   minify: true,
  //   entry: "public",
  //   inject: {
  //     tags: appendIcons,
  //   },
  // }),
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
