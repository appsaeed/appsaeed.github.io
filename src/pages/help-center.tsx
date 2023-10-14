import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";
import ContactSection from "../views/sections/ContactSection";

export default function HelpCenter() {
  return (
    <>
      <Navbar />
      <ContactSection class={`px-4 py-20 border-light sm:px-20`} id="contact" />
      <Footer />
    </>
  );
}
