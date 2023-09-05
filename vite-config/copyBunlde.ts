import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
type DataTypes = string;
type Options = {
  name: string;
  path: DataTypes;
};
export default function copyBunlde({ name, path }: Options) {
  const buildSource = {
    name,
    async writeBundle(options: { dir: string }) {
      try {
        const content = await readFile(path, "utf-8");
        await writeFile(resolve(options.dir, name), content);
      } catch (error) {
        throw new Error(error);
      }
    },
  };

  return buildSource;
}
