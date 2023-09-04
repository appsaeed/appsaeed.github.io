import HRSeparator from "../../components/HRSeparator";
import footersContent from "../../data/footersContent";
import FooterBottom from "./footers/FooterBottom";
import FooterBrand from "./footers/FooterBrand";
import FooterLinks from "./footers/FooterLinks";

function FooterMiddler() {
  const { community, followus, Legal } = footersContent;
  return (
    <div class="grid sm:grid-cols-5">
      <FooterBrand title="Branding" class="sm:col-span-2" />
      <FooterLinks title={community.title} items={community.links} />
      <FooterLinks title={followus.title} items={followus.links} />
      <FooterLinks title={Legal.title} items={Legal.links} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" class="dark:bg-gray-800">
      <div class="mx-auto w-full py-6">
        <FooterMiddler />
        <HRSeparator />
        <FooterBottom />
      </div>
    </footer>
  );
}
