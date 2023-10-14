import { TextareaAttr } from "../types/dom";

export default function Textarea({ ...props }: TextareaAttr) {
  return (
    <textarea
      {...props}
      rows={"7"}
      class={`w-full shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light font-medium`}
    ></textarea>
  );
}
