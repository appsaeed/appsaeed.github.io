/**
 * @package vite-plugin-sitemap
 * @link https://github.com/jbaubree/vite-plugin-sitemap
 */
import os from 'os';
import sitemap from 'vite-plugin-sitemap';
export default function SiteMap() {

    const locations = ["/license", "/privacy-policy", '/term-and-conditions', '/help-center'];

    return sitemap({
        dynamicRoutes: locations,
        hostname: os.hostname(),
        basePath: 'https://appsaeed.github.io'
    });
}