/* @refresh reload */
import { deviceTheme } from "appmon/detection";
import { getThemeStore } from "appmon/storage";
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { initFlowbite } from "flowbite";
import { onMount } from "solid-js";
import Routing from "./Router";
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
  // initialize components based on data attribute selectors
  onMount(() => {
    initFlowbite();
  });
  return (
    <Router>
      <Routing />
    </Router>
  );
};
//dom selector
const maindom = document.querySelector("#root") as HTMLElement;
render(() => <Index />, maindom);
