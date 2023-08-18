import { Link } from "@solidjs/router";
import settings from "../../../app/settings";
import logo from "../../../assets/logo.png";
import Image from "../../../components/Image";
import sections from "../../../data/className/sections";
import { Divattr } from "../../../types/dom";
type FooterBrandProps = {
  title?: string;
} & Divattr;
export default function FooterBrand({
  title = "Brand",
  class: cn,
  ...args
}: FooterBrandProps) {
  return (
    <div
      {...args}
      class={`${cn} py-8 sm:border-0 border-light ${sections.headerfooter.common}`}
    >
      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white max-sm:text-center">
        {title}
      </h2>
      <p class=" text-sm font-light my-6 max-sm:text-center">
        Get a modern project and a logn time support and better codeing exprences with
        atcitecture! Start the perfect business you want with a single click - no hassle,
        no stress! Manage business easy and fun!
      </p>
      <div class="flex justify-center my-6">
        <Link href={"/"} class="flex items-center justify-center">
          <Image src={logo} class="w-auto h-20" alt={settings.name} />
        </Link>
      </div>
    </div>
  );
}
