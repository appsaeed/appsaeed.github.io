import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AISections from "./sections/AISections";
import BillingSection from "./sections/BillingSection";
import BusinessSection from "./sections/BusinessSection";
import CardBusinessSection from "./sections/CardBusinessSection";
import CompaniesSection from "./sections/CompaniesSection";
import ContactSection from "./sections/ContactSection";
import Explore from "./sections/Explore";
import HeroSection from "./sections/HeroSection";
import SkilSection from "./sections/SkilSection";

export default function Views() {
  const container = "px-16";
  return (
    <>
      <Navbar />
      <HeroSection class={container} id="hero" />
      <SkilSection class={container} id="skils" />
      <Explore class={container} id="explore" />
      <ContactSection class={container} id="contact" />
      <AISections class={container} id="ai" />
      <BusinessSection class={container} id="business" />
      <BillingSection class={container} id="billing" />
      <CardBusinessSection class={container} id="cardbussiness" />
      <CompaniesSection class={container} id="companies" />
      <Footer />
    </>
  );
}
