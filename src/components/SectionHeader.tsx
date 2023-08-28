import { Divattr } from "../types/dom";

type SectionHeaderProps = {
  text?: string;
} & Divattr;
export default function SectionHeader({
  text,
  class: className,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div {...props} class={`text-5xl mb-16 text-center ${className}`}>
      {text ? text : children}
    </div>
  );
}
