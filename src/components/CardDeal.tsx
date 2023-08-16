import { card } from "../assets/assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section class={layout.section}>
    <div class={layout.sectionInfo}>
      <h2 class={styles.heading2}>
        Find a better card deal <br class="sm:block hidden" /> in few easy steps.
      </h2>
      <p class={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget
        mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div class={layout.sectionImg}>
      <img src={card} alt="billing" class="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
