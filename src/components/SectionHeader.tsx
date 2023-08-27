import Animate from "../animation";
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
    <Animate.div
      motion="jello"
      {...props}
      class={`text-5xl mb-16 text-center ${className}`}
    >
      {text ? text : children}
    </Animate.div>
  );
}
