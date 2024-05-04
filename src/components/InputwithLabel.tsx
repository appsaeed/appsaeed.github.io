import { toSeoURL } from "utilies";
import Input, { InputProps } from "./Input";
import InputLabel, { LabelProps } from "./InputLabel";

type InputwithLabelProps = {
  label: string;
  mainClass?: string;
  labelProps?: LabelProps;
} & InputProps;

export default function InputwithLabel(props: InputwithLabelProps) {
  const { label, mainClass, labelProps, type = "text" } = props;
  const makefor = toSeoURL(label);
  return (
    <div class={mainClass}>
      <InputLabel for={makefor} {...labelProps}>
        {label}
      </InputLabel>
      <Input id={makefor} type={type} {...props} />
    </div>
  );
}
