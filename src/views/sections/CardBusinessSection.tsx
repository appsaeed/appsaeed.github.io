import assets from "../../assets";
import Image from "../../components/Image";

export default function CardBusinessSection() {
  return (
    <section class={"w-full py-10"}>
      <div class="sm:flex">
        <div class={""}>
          <h2
            class={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}
          >
            Find a better card deal in few easy steps.
          </h2>
          <p
            class={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
            eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center my-8 px-6"
          >
            Start now
          </button>
        </div>

        <div class={""}>
          <Image url={assets.payment_card} alt="billing" class="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  );
}
