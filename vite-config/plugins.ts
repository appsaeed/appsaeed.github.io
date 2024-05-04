import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import sitemap from "vite-sitemap";
import "./global";
import manifest from "./manifest";
import pwa from "./pwa";

const plugins: PluginOption[] = [
    solid(),
    sitemap({
        baseURL: process.env.VITE_LIVE_URL,
        urls: [
            "license",
            "privacy-policy",
            'term-and-conditions',
            'help-center'
        ],
    }),
    pwa({ manifest: manifest })
];

export default plugins;
