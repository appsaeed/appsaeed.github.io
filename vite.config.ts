import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";

const env = Object.assign(process.env, loadEnv("mock", process.cwd(), ""));

const isdev = env.NODE_ENV === "development" ? true : false;

console.log("check development:", isdev);
//basepath
const basename = isdev ? "" : "/appsaeed.github.io/";

export default defineConfig({
  plugins: [solid()],
  server: {
    port: Number(env.VITE_PORT) || 3000,
  },
  base: basename,
  build: {
    rollupOptions: {
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
});
