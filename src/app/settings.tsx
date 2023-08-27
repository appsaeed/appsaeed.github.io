import { unslash } from "appmon/url";
const env__dev = import.meta.env.DEV ? true : false;
const basename = env__dev ? "" : import.meta.env.VITE_BASENAME;
export default {
  name: "Appsaeed",
  mode: import.meta.env.BASE_URL,
  dev: import.meta.env.DEV,
  basename,
  baseURL: import.meta.env.BASE_URL,
  url: unslash(`${location.protocol}//${location.host}/${basename}`),
};
