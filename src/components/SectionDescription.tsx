import { JSXElement } from "solid-js";

export default function SectionDescription({
  text,
  children,
}: {
  text?: string;
  children?: JSXElement;
}) {
  return (
    <div class="w-full mx-auto text-center">
      {text}
      {children}
    </div>
  );
}
