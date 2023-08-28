import { onCleanup, onMount } from "solid-js";
import { ImageAttr } from "../types/dom";

export type ImageProps = ImageAttr;

export default function Image({ alt = "saeed image", class: ch, ...prgs }: ImageProps) {
  let images: HTMLImageElement | undefined;
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("image-blurr", !entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    });

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
    <img ref={images} alt={alt} {...prgs} loading="lazy" class={`image-blurr ${ch}`} />
  );
}
