import { InputAttr } from "../types/dom";

export type InputProps = {
  className?: string;
} & InputAttr;
export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      class={`w-full shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${className}`}
      {...props}
    />
  );
}
