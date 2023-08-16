import { arrowUp } from "../assets/assets";
import styles from "../styles";

const GetStarted = () => (
  <div
    class={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      class={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div class={`${styles.flexStart} flex-row`}>
        <p class="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span class="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" class="w-[23px] h-[23px] object-contain" />
      </div>

      <p class="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span class="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
