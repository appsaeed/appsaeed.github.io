import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";
import pwa from "./pwa";
import SiteMap from "./sitemap";

const plugins: PluginOption[] = [solid() , SiteMap(), pwa({ manifest: manifest })];

export default plugins;
