import { For } from "solid-js";
import DeveloperActivitySvg from "../../components/DeveloperActivitySvg";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import { skils } from "../../data/data";
import { HtmlAttr } from "../../types/dom";

export default function SkilSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <SectionHeader text="Web frameworks and programming Skils" />
      <div class={`grid grid-cols-1 sm:grid-cols-2`}>
        <div class="w-full">
          <div>
            <DeveloperActivitySvg class=" max-h-[360px] mx-auto" />
          </div>
        </div>
        <div class="">
          <For each={skils}>
            {(skil) => (
              <Knowlage
                name={skil.name}
                icon={skil.image}
                percent={skil.percent}
                link={skil.link}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

type KnowlagePrps = {
  name: string;
  icon: string;
  percent: number;
  link?: string;
};

export function Knowlage({ name, icon, percent, link }: KnowlagePrps) {
  return (
    <div class="flex gap-4 m-3 pb-4 ">
      <div class="flex-auto w-12">
        <a target="_blank" href={link || ""}>
          <Image
            class="w-10 h-10 p-1 hover:p-0 transition-all rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={icon}
            alt="Javasript"
          />
        </a>
      </div>
      <div class="flex-auto w-full">
        <div class="flex justify-between mb-1">
          <span class="text-base font-medium text-blue-700 dark:text-white">{name}</span>
          <span class=" text-sm font-medium text-blue-700 dark:text-white">
            {percent}%
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            class="bg-blue-600 h-2 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
