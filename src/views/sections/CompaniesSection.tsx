import { For } from "solid-js";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";
import companies from "../../data/companies";
import { HtmlAttr } from "../../types/dom";

type CompanyProps = {
  url: string;
  name?: string;
};
function Company({ url, name }: CompanyProps) {
  return (
    <div title={name} class="flex justify-center items-center w-28 m-5">
      <Image src={url} class="w-[100px] h-[80px] object-contain" />
    </div>
  );
}
export default function CompaniesSection(props: HtmlAttr) {
  return (
    <section {...props}>
      <SectionHeader>Working marketplace & companies</SectionHeader>
      <div class="flex justify-center overflow-hidden">
        <For each={companies}>
          {(com) => {
            return <Company url={com.logo} name={com.name} />;
          }}
        </For>
      </div>
    </section>
  );
}
