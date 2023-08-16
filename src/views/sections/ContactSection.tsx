import { support } from "../../assets/assets";
import Image from "../../components/Image";
import InputwithLabel from "../../components/InputwithLabel";
import SectionHeader from "../../components/SectionHeader";
import TextareaWithLabel from "../../components/TextareaWithLabel";

export default function ContactSection() {
  return (
    <section class="w-full py-10">
      <SectionHeader text="Contact Me" />

      <div class="grid grid-cols-1 sm:grid-cols-2">
        {/* secound part */}
        <div class="mx-auto">
          <Image class="w-full h-full" url={support} />
        </div>

        {/* form/ */}
        <div class="p-8 bg-gray-700 shadow-gray-600 rounded-2xl h-max">
          <p class="text-xl uppercase tracking-wider">Get in touch</p>
          <form class="mt-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputwithLabel name="name" type="text" label="Your name" />
              <InputwithLabel name="email" type="email" label="Your email" />
            </div>
            <InputwithLabel name="subject" label="Your Subject" />

            <TextareaWithLabel label="Your messsage" value={"hello"} />

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
