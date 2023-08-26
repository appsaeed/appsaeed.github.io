import Animate from "../animation";
import { Divattr } from "../types/dom";

type SectionHeaderProps = {
  text: string;
  classs?: string;
} & Divattr;
export default function SectionHeader({ text, classs, ...props }: SectionHeaderProps) {
  return (
    <Animate.div motion="jello" {...props} class={`text-5xl mb-16 text-center ${classs}`}>
      {text}
    </Animate.div>
  );
}
