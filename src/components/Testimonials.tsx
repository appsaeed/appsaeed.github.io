import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    class={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div class="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div class="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 class={styles.heading2}>
        What People are <br class="sm:block hidden" /> saying about us
      </h2>
      <div class="w-full md:mt-0 mt-6">
        <p class={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business anywhere on
          the planet.
        </p>
      </div>
    </div>

    <div class="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
