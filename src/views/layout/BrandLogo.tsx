import { Link } from "@solidjs/router";
import moon from "../../assets/moon_1823324-d04b9ad2.png";
import Image from "../../components/Image";

export default function BrandLogo() {
  return (
    <Link href="/" class="flex items-center">
      <Image url={moon} alt="logo" class="h-8 mr-3" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Saeed Hossen
      </span>
    </Link>
  );
}
