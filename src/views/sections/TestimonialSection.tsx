import { FiTarget } from "solid-icons/fi";
import { For } from "solid-js";
import Animate from "../../animation";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import testimonials from "../../data/testimonials";
import { HtmlAttr } from "../../types/dom";

type ItemProps = {
  index: number;
  image: string;
  name: string;
  feedback: string;
  position: string;
};
function ListItem({ name, position, feedback, image, index }: ItemProps) {
  return (
    <Animate.div
      duration={`1.${index}s`}
      motion="slideInUp"
      class="bg-slate-700 p-6 rounded-2xl w-full"
    >
      <div class="flex justify-between gap-6 mb-6">
        <div class="w-10 h-10">
          <Image
            src={image}
            alt="feedback_by-Sara Lee"
            class="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div class="link">@{name}</div>
        <div class="flex">
          <FiTarget class="text-xl mr-1" /> {position}
        </div>
      </div>
      <div class="">
        <p class="text-white tracking-wider text-[16px]">{feedback}</p>
      </div>
    </Animate.div>
  );
}

export default function TestimonialSection(props: HtmlAttr) {
  return (
    <section {...props} class={`${props.class} `}>
      <SectionHeader text="Testimonials" />
      <div class="">
        <div class="grid sm:grid-cols-3 gap-4">
          <For each={testimonials}>
            {({ name, position, feedback, image }, index) => {
              return (
                <ListItem
                  index={index()}
                  name={name}
                  position={position}
                  feedback={feedback}
                  image={image}
                />
              );
            }}
          </For>
        </div>
      </div>
    </section>
  );
}
