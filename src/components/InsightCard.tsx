"use client";

type InsightCardProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const InsightCard = ({ imgUrl, title, subtitle }: InsightCardProps) => (
  <div class="flex md:flex-row flex-col gap-4">
    <img
      src={imgUrl}
      alt="planet-01"
      class="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div class="w-full flex justify-between items-center">
      <div class="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 class="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
        <p class="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div class="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img src="/arrow.svg" alt="arrow" class="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </div>
);

export default InsightCard;
