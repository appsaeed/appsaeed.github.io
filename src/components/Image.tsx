import { onMount } from "solid-js";
import { ImageAttr } from "../types/dom";

export type ImageProps = ImageAttr;

export default function Image({ alt = "alt", class: ch, ...prgs }: ImageProps) {
  let images: HTMLImageElement | undefined;
  onMount(() => {
    images?.addEventListener("load", () => {
      if (images?.complete && images.naturalHeight) {
        images?.classList.remove("image-blurr");
      }
    });
  });

  return (
    <>
      <img ref={images} alt={alt} {...prgs} loading="lazy" class={`image-blurr ${ch}`} />
    </>
  );
}
