import { toSeoUrl } from "appmon/url";
import Input, { InputProps } from "./Input";
import InputLabel, { LabelProps } from "./InputLabel";

type InputwithLabelProps = {
  label: string;
  mainClass?: string;
  labelProps?: LabelProps;
} & InputProps;

export default function InputwithLabel(props: InputwithLabelProps) {
  const { label, mainClass, labelProps } = props;
  const makefor = toSeoUrl(label);
  return (
    <div class={mainClass}>
      <InputLabel for={makefor} {...labelProps}>
        {label}
      </InputLabel>
      <Input id={makefor} {...props} />
    </div>
  );
}
