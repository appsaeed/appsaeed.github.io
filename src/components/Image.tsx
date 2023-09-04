import { onCleanup, onMount } from "solid-js";
import { ImageAttr } from "../types/dom";

export type ImageProps = ImageAttr;

export default function Image({ alt = "saeed image", class: ch, ...prgs }: ImageProps) {
  let images: HTMLImageElement | undefined;
  onMount(() => {
    //create ovserver instance of ovserver to display the image
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("image-blurr");
          observer.unobserve(entry.target);
        }
      });
    });

    //check if the image is url loaded
    if (images) {
      images.addEventListener("load", () => {
        if (images?.complete && images.naturalHeight) {
          observer.observe(images);
        }
      });
    }

    onCleanup(() => {
      observer.unobserve(images as Element);
      observer.disconnect();
    });
  });

  return (
    <img
      ref={images}
      alt={alt}
      {...prgs}
      loading="lazy"
      class={`image-blurr object-contain ${ch}`}
    />
  );
}
