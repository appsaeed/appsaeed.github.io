import { loadEnv } from "vite";

try {
  Object.assign(process.env, loadEnv("mock", process.cwd(), ""));
} catch (error) { }
