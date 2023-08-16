import { FiCheck } from "solid-icons/fi";
import assets from "../../assets";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
const Listitem = () => {
  return (
    <div class="flex my-6">
      <div class="w-8 h-8 p-1 dark:bg-slate-600 rounded-full">
        <FiCheck class=" text-2xl text-gray-100 mx-auto" />
      </div>
      <span class="dark:text-slate-100 ml-3 font-normal leading-[30.8px]">
        We are able to build web site/application as much faster
      </span>
    </div>
  );
};
export default function AISections() {
  return (
    <section class={`w-full py-10`}>
      <SectionHeader text="Artificial intelligence" />
      <div class={`grid grid-cols-1 sm:grid-cols-2`}>
        <div class={`mb-6`}>
          <h1 class="font-poppins dark:text-white text-4xl ">
            The Next Generation web on AI
          </h1>
          <p class={`mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most
            likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>

          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
        </div>

        <div class={``}>
          <Image url={assets.roboto} />
        </div>
      </div>
    </section>
  );
}
