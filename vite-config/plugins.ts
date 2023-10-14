import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";
import pwa from "./pwa";
import sitemap from "./sitemap";

const plugins: PluginOption[] = [
    solid(),
    sitemap({
        baseUrl: process.env.VITE_LIVE_URL,
        urls: [
            "/license",
            "/privacy-policy",
            '/term-and-conditions',
            '/help-center'
        ],
    }),
    pwa({ manifest: manifest })
];

export default plugins;
