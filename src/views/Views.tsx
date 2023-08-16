import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "../components";
import styles from "../styles";
import Navbar from "./layout/Navbar";
import ContactSection from "./sections/ContactSection";
import Explore from "./sections/Explore";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkilSection from "./sections/SkilSection";

export default function Views() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkilSection />
      <Explore />
      <ProjectSection />
      <ContactSection />

      <div class=" text-8xl">Start new componets</div>
      <div class={`bg-primary ${styles.flexStart}`}>
        <div class={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div class={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div class={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
