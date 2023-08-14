import { For, createSignal } from "solid-js";
import ExploreCard from "../../components/ExploreCard";
import SectionHeader from "../../components/SectionHeader";
import { exploreWorlds } from "../../constants/index";

const Explore = () => {
  const [active, setActive] = createSignal(exploreWorlds[0].imgUrl);

  return (
    <section id="explore" class="py-10">
      <SectionHeader text="Explore project" />
      <div class={`mx-auto w-full`}>
        <div class="flex lg:flex-row flex-col min-h-[70vh] gap-5">
          <For each={exploreWorlds}>
            {(world) => <ExploreCard active={active} {...world} setActive={setActive} />}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Explore;
