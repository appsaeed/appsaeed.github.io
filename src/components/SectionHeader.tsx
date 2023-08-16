import { Divattr } from "../types/dom";

type SectionHeaderProps = {
  text: string;
  classs?: string;
} & Divattr;
export default function SectionHeader({ text, classs, ...props }: SectionHeaderProps) {
  return (
    <div {...props} class={` font-bold text-6xl mb-12 text-center ${classs}`}>
      {text}
    </div>
  );
}
