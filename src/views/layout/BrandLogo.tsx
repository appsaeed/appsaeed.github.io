import { Link } from "@solidjs/router";
import settings from "../../app/settings";
import moon from "../../assets/logo.png";
import Image from "../../components/Image";

export default function BrandLogo() {
  return (
    <Link href={settings.url} class="flex items-center">
      <Image src={moon} alt="logo" class="h-8 mr-3" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:text-xl">
        Saeed Hossen
      </span>
    </Link>
  );
}
