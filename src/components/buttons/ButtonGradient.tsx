import { ButtonAttr } from "../../types/dom";

export default function ButtonGradient(props: ButtonAttr) {
  return (
    <button
      type="button"
      class={`"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center my-8 px-6 ${props.class}`}
    >
      {props.children}
    </button>
  );
}
