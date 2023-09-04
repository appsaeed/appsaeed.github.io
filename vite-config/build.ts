import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { BuildOptions } from "vite";
import "./global";
const build: BuildOptions = {
  manifest: true,
  chunkSizeWarningLimit: 10000,
  rollupOptions: {
    output: {
      chunkFileNames: `[name]_chunk_[hash].js`,
      entryFileNames: `[name]_[hash].js`,
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
};

export default build;
