import logo from "../../assets/logo.png";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => (
  <section class={`py-10 w-full`}>
    <div class={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div class="flex-[1] flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" class="w-[266px] h-[72.14px] object-contain" />
        <p
          class={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}
        >
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div class="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div class={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 class="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul class="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  class={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div class="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p class="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 appsaeed. All Rights Reserved.
      </p>

      <div class="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, _index) => (
          <a class="w-[21px] h-[21px] object-contain cursor-pointer mr-3">
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
