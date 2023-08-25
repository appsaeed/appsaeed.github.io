import { FiCheck } from "solid-icons/fi";
import { For } from "solid-js";
import assets from "../../assets";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import text_ai_section from "../../data/content/text_ai_section";

import { HtmlAttr, SpanAttr } from "../../types/dom";
const Listitem = (props: SpanAttr) => {
  return (
    <div class="flex my-6">
      <div class="w-8 h-8 p-1 bg-slate-600 rounded-full">
        <FiCheck class=" text-2xl mx-auto text-green-400" />
      </div>
      <span {...props} class="dark:text-slate-100 ml-3 font-normal leading-[30.8px]">
        {props.children}
      </span>
    </div>
  );
};
export default function AISections(props: HtmlAttr) {
  return (
    <section id={props.id} class={`px-[0!important] mx-[0!important] ${props.class}`}>
      <SectionHeader text={text_ai_section.title} />
      <div class={`grid grid-cols-1 sm:grid-cols-2`}>
        <div class={`${props.class} border-0 mb-6 max-sm:order-2`}>
          <h1 class="font-poppins dark:text-white text-3xl ">
            {text_ai_section.subTitle}
          </h1>
          <p class={`mt-5 font-light text-base`}>{text_ai_section.description}</p>
          <For each={text_ai_section.items}>
            {(item) => {
              return (
                <Listitem
                  ref={(span) => {
                    span.innerHTML = String(item);
                  }}
                />
              );
            }}
          </For>
        </div>

        <div class={`w-full`}>
          <Image src={assets.roboto} />
        </div>
      </div>
    </section>
  );
}
