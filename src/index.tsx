/* @refresh reload */
import { deviceTheme } from "appmon/detection";

import { render } from "solid-js/web";

import { Router as BrowserRouter } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { getThemeStore, setThemeStore } from "appmon/storage";
import Routes from "./Router";
import settings from "./app/settings";
import "./assets/css/image.css";
import "./index.css";

if (!getThemeStore()) setThemeStore(deviceTheme());

document.documentElement.classList.add(getThemeStore());
document
  .querySelector('meta[name="theme-color"]')
  ?.setAttribute("content", settings.theme.color);

// if (getThemeStore()) {
//   document.documentElement.classList.remove("dark");
//   document.documentElement.classList.remove("light");
//   document.documentElement.classList.add(getThemeStore());
//   document
//     .querySelector('meta[name="theme-color"]')
//     ?.setAttribute("content", "");
// } else {
//   document.documentElement.classList.add(deviceTheme());
// }

export const Index = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
//dom selector
// const maindom = document.body;
const maindom = document.querySelector('#index') as HTMLElement;
render(() => <Index />, maindom);
