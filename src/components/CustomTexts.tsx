import { JSX } from "solid-js";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <div class={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
    {Array.from(title).map((letter) => (
      <span>{letter === " " ? "\u00A0" : letter}</span>
    ))}
  </div>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: JSX.Element;
  textStyles: string;
}) => (
  <div class={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}>
    {title}
  </div>
);
