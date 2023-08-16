import { apple, bill, google } from "../assets/assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" class={layout.sectionReverse}>
    <div class={layout.sectionImgReverse}>
      <img src={bill} alt="billing" class="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div class="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div class="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div class={layout.sectionInfo}>
      <h2 class={styles.heading2}>
        Easily control your <br class="sm:block hidden" /> billing & invoicing
      </h2>
      <p class={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div class="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          class="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          class="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
