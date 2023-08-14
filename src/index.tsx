/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { initFlowbite } from "flowbite";
import { onMount } from "solid-js";
import Models from "./components/Models";
import "./index.css";
import Views from "./views/Views";

const Index = () => {
  // initialize components based on data attribute selectors
  onMount(() => {
    initFlowbite();
  });
  return (
    <>
      <Models />
      <div id="model"></div>
      <Router>
        <Views />
      </Router>
    </>
  );
};
//dom selector
const maindom = document.querySelector("#root") as HTMLElement;

render(() => <Index />, maindom);
