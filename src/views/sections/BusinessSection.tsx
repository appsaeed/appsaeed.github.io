import { For } from "solid-js";
import Image from "../../components/Image";
import ButtonGradient from "../../components/buttons/ButtonGradient";
import features from "../../data/features";
import { HtmlAttr } from "../../types/dom";

type CardProps = {
  icon: string;
  title: string;
  content: string;
};
function BusinessCard({ icon, title, content }: CardProps) {
  return (
    <div class="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
      <div class=" w-12 h-12 rounded-full p-3 flex justify-center items-center bg-dimBlue">
        <Image url={icon} alt={title} class="w-full h-full object-contain" />
      </div>
      <div class="flex-1 flex flex-col ml-3">
        <h4 class="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p class="font-poppins font-light text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function BusinessSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <div class="flex md:flex-row flex-col sm:py-16 py-6">
        <div class="flex-1 flex justify-center items-start flex-col">
          <h2 class="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
            You do the business, we’ll handle the project.
          </h2>
          <p class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            With the right appliction, you can improve your financial life by building web
            application, earning rewards and growing your business.
          </p>
          <ButtonGradient>Get Starting</ButtonGradient>
        </div>
        <div class="flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
          <For each={features}>
            {(item) => {
              return <BusinessCard {...item} />;
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
