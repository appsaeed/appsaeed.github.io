/* @refresh reload */
import { deviceTheme } from "appmon/detection";
import { getThemeStore } from "appmon/storage";
import { render } from "solid-js/web";

import { Router as BrowserRouter } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Routes from "./Router";
import "./assets/css/image.css";
import "./index.css";

if (getThemeStore()) {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add(getThemeStore());
} else {
  document.documentElement.classList.add(deviceTheme());
}

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
const maindom = document.querySelector("#root") as HTMLElement;
render(() => <Index />, maindom);
