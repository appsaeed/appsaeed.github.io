import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AISections from "./sections/AISections";
import BusinessSection from "./sections/BusinessSection";
import CompaniesSection from "./sections/CompaniesSection";
import ContactSection from "./sections/ContactSection";
import ExploreSection from "./sections/ExploreSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkilSection from "./sections/SkilSection";
import TestimonialSection from "./sections/TestimonialSection";

export default function Views() {
  const container = "px-4 py-20 border-light sm:px-20";
  return (
    <>
      <Navbar />
      <HeroSection class={container} id="hero" />
      <SkilSection class={container} id="skils" />
      <TestimonialSection class={container} />
      <ProjectSection />
      <ExploreSection class={container} id="explore" />
      <ContactSection class={container} id="contact" />
      <AISections class={container} id="ai" />
      <BusinessSection class={container} id="business" />
      <CompaniesSection class={container} id="companies" />
      <Footer />
    </>
  );
}
