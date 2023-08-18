import { Modal } from "flowbite";
import { createEffect } from "solid-js";
import Image from "./Image";

export default function Models() {
  createEffect(() => {
    // set the modal menu element
    const targetEl = document.getElementById("modelElm");

    /*
     * $targetEl: required
     * options: optional
     */
    const modal = new Modal(targetEl, {
      backdrop: "dynamic",
      placement: "bottom-right",
      closable: true,
      backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    });
    modal.show();
  });
  return (
    <div
      id="modelElm"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl h-[80vh]">
        <Image class="w-full h-full" src={"/planet-01.png"} />
      </div>
    </div>
  );
}
