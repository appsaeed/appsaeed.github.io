import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

type Featureprops = { icon: string; title: string; content: string; index: number };

const FeatureCard = ({ icon, title, content, index }: Featureprops) => (
  <div
    class={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div class={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
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

const Business = () => (
  <section id="features" class={layout.section}>
    <div class={layout.sectionInfo}>
      <h2 class={styles.heading2}>
        You do the business, <br class="sm:block hidden" /> we’ll handle the money.
      </h2>
      <p class={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by building
        credit, earning rewards and saving money. But with hundreds of credit cards on the
        market.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div class={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
