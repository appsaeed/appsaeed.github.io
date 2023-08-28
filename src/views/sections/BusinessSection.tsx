import { For } from "solid-js";
import Animate from "../../animation";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import ButtonGradient from "../../components/buttons/ButtonGradient";
import content from "../../data/content/text_business_section";
import { HtmlAttr } from "../../types/dom";

type CardProps = {
  index: number;
  icon: string;
  title: string;
  content: string;
};
function BusinessCard({ icon, title, content, index }: CardProps) {
  return (
    <Animate.div
      motion="slideInRight"
      duration={`1.${index}s`}
      class="flex flex-row p-6 rounded-[20px] mb-6 feature-card"
    >
      <div class=" w-12 h-12 rounded-full p-3 flex justify-center items-center bg-dimBlue">
        <Image src={icon} alt={title} class="w-full h-full object-contain" />
      </div>
      <div class="flex-1 flex flex-col ml-3">
        <h4 class="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p class="font-light text-dimWhite text-[16px] leading-[24px]">{content}</p>
      </div>
    </Animate.div>
  );
}

export default function BusinessSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <SectionHeader text={content.title} />
      <div class="flex md:flex-row flex-col">
        <div class="flex-1 flex  flex-col">
          <Animate.h2
            motion="slideInLeft"
            class="font-semibold text-4xl dark:text-white w-full"
          >
            {content.subTitle}
          </Animate.h2>
          <Animate.p
            motion="slideInLeft"
            class="font-light text-[16px] text-dimWhite max-w-[470px] my-5"
          >
            {content.subDescription}
          </Animate.p>
          <Animate.button motion="slideInDown" class="flex gap-5">
            <ButtonGradient>Get Starting</ButtonGradient>
          </Animate.button>
        </div>

        {/* item  */}
        <div class="flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
          <For each={content.items}>
            {(item, index) => {
              return <BusinessCard index={index()} {...item} />;
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
