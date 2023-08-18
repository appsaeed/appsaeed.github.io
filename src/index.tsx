/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { initFlowbite } from "flowbite";
import { onMount } from "solid-js";
import "./assets/developer-activity.css";
import "./index.css";
import Pages from "./pages";

const Index = () => {
  // initialize components based on data attribute selectors
  onMount(() => {
    initFlowbite();
  });
  return (
    <>
      <Router>
        <Pages />
      </Router>
    </>
  );
};
//dom selector
const maindom = document.querySelector("#root") as HTMLElement;
render(() => <Index />, maindom);
