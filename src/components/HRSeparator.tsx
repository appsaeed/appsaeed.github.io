import { HrAttr } from "../types/dom";

export default function HRSeparator(props: HrAttr) {
  return (
    <hr
      {...props}
      class={`${props.class} my-6 sm:border-gray-200 mx-auto sm:dark:border-gray-700 max-sm:border-none `}
    />
  );
}
