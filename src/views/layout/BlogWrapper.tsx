import { Divattr } from "../../types/dom";

export default function BlogWrapper({
  class: className,
  children,
  ...prgs
}: Divattr) {
  return (
    <div
      class={`p-8 bg-slate-50  dark:bg-slate-700 rounded-lg ${className}`}
      {...prgs}
    >
      {children}
    </div>
  );
}
