import { ImageAttr } from "../types/dom";

export type ImageProps = { url: string } & ImageAttr;

export default function Image({ url, alt = "alt", ...prgs }: ImageProps) {
  return (
    <>
      <picture class="w-full h-full">
        <img
          src={url}
          alt={alt}
          {...prgs}
          loading="lazy"
          width={"auto"}
          height={"auto"}
        />
      </picture>
    </>
  );
}
