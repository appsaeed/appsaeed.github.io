import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

try {
    const content = await readFile(resolve(process.cwd() , 'appsaeed', "README.md"), "utf-8");
    await writeFile(resolve(process.cwd(), "README.md"), content);
  } catch (error) {
    throw new Error(error);
  }