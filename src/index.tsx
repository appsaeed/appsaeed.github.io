/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { initFlowbite } from "flowbite";
import { onMount } from "solid-js";
import "./assets/developer-activity.css";
import "./index.css";
import Views from "./views/Views";

const Index = () => {
  // initialize components based on data attribute selectors
  onMount(() => {
    initFlowbite();
  });
  return (
    <>
      <Router>
        <Views />
      </Router>
    </>
  );
};
//dom selector
const maindom = document.querySelector("#root") as HTMLElement;
render(() => <Index />, maindom);
