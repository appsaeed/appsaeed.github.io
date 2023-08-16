import assets from "../../assets";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";

export default function BillingSection() {
  return (
    <section class={"w-full py-10"}>
      <SectionHeader text="Trusted Payment gatway" />
      <div class="grid grid-cols-1 sm:grid-cols-12">
        <div class={"sm:col-span-7"}>
          <Image
            url={assets.billing}
            alt="billing"
            class="w-[100%] h-[100%] relative z-[5]"
          />
        </div>

        <div class={"sm:col-span-5"}>
          <h2
            class={
              "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"
            }
          >
            Easily control your <br class="sm:block hidden" /> billing & invoicing
          </h2>
          <p
            class={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
            neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>

          <div class="flex justify-around gap-4 w-full mt-6">
            <Image
              url={assets.apple_store}
              alt="google_play"
              class="w-full h-auto object-contain cursor-pointer"
            />
            <Image
              url={assets.googel_play}
              alt="google_play"
              class="w-full h-auto object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
