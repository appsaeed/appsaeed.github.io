import { BuildOptions } from "vite";
import copyBunlde from "./copyBunlde";
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
    plugins: [copyBunlde({ name: "404.html", path: "index.html" })],
  },
};

export default build;
