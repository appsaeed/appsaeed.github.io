import { quotes } from "../assets/assets";
type FeedbackProps = { content: string; name: string; title: string; img: string };
const FeedbackCard = ({ content, name, title, img }: FeedbackProps) => (
  <div class="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" class="w-[42.6px] h-[27.6px] object-contain" />
    <p class="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div class="flex flex-row">
      <img src={img} alt={name} class="w-[48px] h-[48px] rounded-full" />
      <div class="flex flex-col ml-4">
        <h4 class="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p class="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
