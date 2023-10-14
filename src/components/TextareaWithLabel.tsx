import { toSeoUrl } from "appmon/url";
import { TextareaAttr } from "../types/dom";
import InputLabel from "./InputLabel";
import Textarea from "./Textarea";
type TextareaProps = {
  label: string;
  mainClass?: string;
} & TextareaAttr;
export default function TextareaWithLabel({ mainClass, label, ...props }: TextareaProps) {
  return (
    <div class={`mb-2 ${mainClass}`}>
      <InputLabel for={toSeoUrl(label)}>{label}</InputLabel>
      <Textarea {...props} />
    </div>
  );
}
