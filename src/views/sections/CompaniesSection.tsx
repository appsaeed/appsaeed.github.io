import companies from "../../assets/companies";
import Image from "../../components/Image";
import { HtmlAttr } from "../../types/dom";

function Company({ url }: { url: string }) {
  return (
    <div class="flex justify-center items-center w-28 m-5">
      <Image url={url} class="sm:w-[192px] w-[100px] object-contain" />
    </div>
  );
}
export default function CompaniesSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <div class="flex justify-center overflow-hidden">
        <Company url={companies.dropbox} />
        <Company url={companies.coinbase} />
        <Company url={companies.meta} />
        <Company url={companies.shopify} />
      </div>
    </section>
  );
}
