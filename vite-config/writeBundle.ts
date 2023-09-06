import { writeFile } from "fs/promises";
import { resolve } from "path";
type Options = {
  name: string;
  content: string;
};
export default function writeBundle({ name, content }: Options) {
  const buildSource = {
    name,
    async writeBundle(options: { dir: string }) {
      try {
        await writeFile(resolve(options.dir, name), content);
      } catch (error) {
        throw new Error(error);
      }
    },
  };

  return buildSource;
}
