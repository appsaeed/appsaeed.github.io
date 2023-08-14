import Navbar from "./layout/Navbar";
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
      <div class="h-[9999px]"></div>
    </>
  );
}
