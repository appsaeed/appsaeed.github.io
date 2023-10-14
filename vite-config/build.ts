import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { BuildOptions } from "vite";
import "./global";
const build: BuildOptions = {
  manifest: true,
  minify: true,
  chunkSizeWarningLimit: 3000,
  assetsDir: "",
  rollupOptions: {
    output: {
      // chunkFileNames: `[name]_chunk_[hash].js`,
      // entryFileNames: `[name]_[hash].js`,
      // assetFileNames: `[name]_[hash].[ext]`,
    },
    plugins: [
      {
        name: "404.html",
        async writeBundle(options) {
          try {
            const content = await readFile(resolve(options.dir, "index.html"), "utf-8");
            await writeFile(resolve(options.dir, "404.html"), content);
          } catch (error) {
            throw new Error(error);
          }
        },
      },
    ],
  },
};

export default build;
