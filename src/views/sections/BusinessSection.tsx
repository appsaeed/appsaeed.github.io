import { features } from "../../constants";

type Featureprops = { icon: string; title: string; content: string; index: number };

const FeatureCard = ({ icon, title, content }: Featureprops) => (
  <div class={`flex flex-row p-6 rounded-[20px]`}>
    <div
      class={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
    >
      <img src={icon} alt="star" class="w-[50%] h-[50%] object-contain" />
    </div>
    <div class="flex-1 flex flex-col ml-3">
      <h4 class="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p class="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default function BusinessSection() {
  return (
    <section id="business" class={"py-10"}>
      <div class="grid grid-cols-1 sm:grid-cols-12">
        <div class={"sm:col-span-5"}>
          <h2 class={" text-4xl font-semibold dark:text-white  w-full"}>
            You do the business, we’ll handle the money.
          </h2>
          <p
            class={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            With the right credit card, you can improve your financial life by building
            credit, earning rewards and saving money. But with hundreds of credit cards on
            the market.
          </p>
          <button
            type="button"
            class="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Get start
          </button>
        </div>

        <div class={`sm:col-span-7`}>
          {features.map((feature, index) => (
            <FeatureCard {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
