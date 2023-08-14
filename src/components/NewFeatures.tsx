const NewFeatures = ({
  imgUrl,
  title,
  subtitle,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
}) => (
  <div class="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div class={`w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
      <img src={imgUrl} alt="icon" class="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 class="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p class="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
