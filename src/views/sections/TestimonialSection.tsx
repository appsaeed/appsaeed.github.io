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
  // onMount(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Cookie",
  //     "__cfruid=cf58a60b5b4db5898ebbb7f78a8f64c516c92f2d-1693748287; logged_out_currency=USD; u_guid=1693747745000-096ab3d225d80970249c912e93ac609fd6f1bf60; visited_fiverr=true; _fiverr_session_key=dba0e75a9a0994a32e04bc65a915080a; _pxhd=IYO9Jf5Lr2qVtfom1dj6nVdFt4UtuqztJV0TYXX/0QxRSK5AZir4oPJQDbwES7uKEMD/fPRfTRuZ/FsEOoq7lQ==:Bt4gbTV6qqAwfuQdKNveK7gaGZVzqjOVsNL4E0vtWrdDb4QkfrBOJmFwwG3gtg6cW4J75zsqENoLWud91Wp55AiM55fDU8XXpTJFgOm/OeM="
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     // redirect: "follow",
  //   };

  //   fetch(
  //     "https://www.fiverr.com/reviews/user_page/fetch_user_reviews/101612053?user_id=101612053",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // });
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
      <SectionHeader>Testimonials</SectionHeader>
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
