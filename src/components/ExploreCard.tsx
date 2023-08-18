import { BsLink45deg, BsPlus, BsShare } from "solid-icons/bs";
import { shareToSocial } from "../utils/global";
import Image from "./Image";

type ExploreCardProps = {
  imgUrl: string;
  title: string;
  active: () => string;
  setActive: (id: string) => void;
};

const ExploreCard = ({ imgUrl, title, active, setActive }: ExploreCardProps) => {
  return (
    <>
      <div
        class={`relative  overflow-hidden flex items-center justify-center min-w-[170px] lg:h-[700px] transition-[all] duration-[0.7s] cursor-pointer ${
          active() === imgUrl
            ? "lg:flex-[3.5] h-[60vh] sm:h-[60vh]"
            : "lg:flex-[0.5] h-[100px] sm:h-[100px]"
        }`}
        onClick={() => {
          if (active() == imgUrl) {
            setActive("");
          } else {
            setActive(imgUrl);
          }
        }}
      >
        <Image
          src={imgUrl}
          alt={title}
          class="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active() !== imgUrl && (
          <h3 class=" font-semibold sm:text-[26px] text-[18px] dark:text-white absolute md:rotate-[-90deg] md:text-ellipsis md:whitespace-nowrap">
            {title}
          </h3>
        )}

        <div
          class={`absolute bottom-0 p-8 flex justify-start w-full flex-col h-[10rem] bg-[rgba(0,0,0,0.7)] rounded-b-[24px] transition-[all] duration-[0.7s] ${
            active() == imgUrl ? "opacity-100" : " opacity-0"
          }`}
        >
          <div class="flex justify-around">
            <div class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle">
              <BsPlus class="w-full text-4xl mx-auto" />
            </div>
            <a
              target="_blank"
              href={imgUrl}
              class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle"
              data-tollpit
            >
              <BsLink45deg class="w-full text-4xl mx-auto" />
            </a>

            <div
              class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle"
              onClick={() => {
                const error = shareToSocial({
                  title: "Appsaeed",
                  url: imgUrl,
                  text: "hello world",
                });
                alert(error);
              }}
            >
              <BsShare class="w-full text-4xl mx-auto" />
            </div>
            {/* <div class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle sm:hidden md:block">
          <FiGithub class="w-full text-4xl mx-auto" />
        </div>
        <div class="w-10 h-10 p-1 rounded-full hover:ring-2 ring-gray-300 dark:ring-gray-500 text-center items-center align-middle sm:hidden md:block">
          <BsHeadphones class="w-full text-4xl mx-auto" />
        </div> */}
          </div>
          <div class=" text-2xl text-center mt-4">{title}</div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
