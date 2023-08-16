import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AISections from "./sections/AISections";
import BillingSection from "./sections/BillingSection";
import BusinessSection from "./sections/BusinessSection";
import CardBusinessSection from "./sections/CardBusinessSection";
import ContactSection from "./sections/ContactSection";
import Explore from "./sections/Explore";
import HeroSection from "./sections/HeroSection";
import SkilSection from "./sections/SkilSection";

export default function Views() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkilSection />
      <Explore />
      {/* <ProjectSection /> */}
      <ContactSection />
      <AISections />
      <BusinessSection />
      <BillingSection />
      <CardBusinessSection />
      <Footer />
    </>
  );
}
