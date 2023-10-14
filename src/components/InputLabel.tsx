import { JSX, JSXElement } from "solid-js";

export type LabelProps = {
  className?: string;
  children: JSXElement;
} & JSX.LabelHTMLAttributes<HTMLLabelElement>;
export default function InputLabel({ className, children, ...props }: LabelProps) {
  const classs = className ? className : "";
  return (
    <div class="mb-2">
      <label
        class={`w-full text-sm font-medium text-gray-900 dark:text-white ${classs}`}
        {...props}
      >
        {children}
      </label>
    </div>
  );
}
