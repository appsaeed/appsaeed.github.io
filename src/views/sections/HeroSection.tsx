import { loadImage } from "appmon/load";
import { FiDownload } from "solid-icons/fi";
import { onCleanup, onMount } from "solid-js";
//@ts-ignore
import Typed from "typed.js";
import Animate from "../../animation";
import assets from "../../assets";
import { HtmlAttr } from "../../types/dom";

export default function (props: HtmlAttr) {
  let typeElm: HTMLParagraphElement | undefined;
  onMount(() => {
    let _typed: Typed;
    if (typeElm) {
      _typed = new Typed(typeElm, {
        strings: typingText,
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: false,
      });
    }
    onCleanup(() => {
      _typed?.destroy();
      _typed = null;
    });
  });

  return (
    <section
      ref={(hero) => {
        loadImage(assets.bg_hero).then(() => {
          hero.classList.remove("bg-blurr");
          hero.setAttribute("style", `background-image: url(${assets.bg_hero});`);
        });
      }}
      {...props}
      class={`bg-blurr bg-cover bg-left-top px-10 bg-fixed`}
    >
      <div class="w-full mx-auto text-center pt-28 pb-16">
        <Animate.h1 motion="slideInDown" class="mb-20 text-4xl font-extrabold   text-slate-300">
          I'm <span class=" font-bold text-6xl">Saeed</span> Hossen
        </Animate.h1>
        <Animate.h2 motion="slideInUp" class="mb-20 text-4xl font-extrabold  text-white h-10">
          <p id="typing" ref={typeElm}>
            {typingText[0]}
          </p>
        </Animate.h2>

        <Animate.h2 motion="slideInUp" class="mb-20 text-base text-slate-300">
          I'm a Web Application Developer with a good expertise for JavaScript, Laravel, React.js, Solid.js, Headless Technology, and everything related to APIs. I also specialize in TailwindCSS, and WordPress, including themes, plugins, and Rest APIs. Currently, I'm open to work and employment opportunities
        </Animate.h2>

        <Animate.a href="/saeed-cv.pdf" download={'Saeed CV for web development job'} motion="slideInUp" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2" >
          <FiDownload style={{ display: 'inline' }} />  Download CV
        </Animate.a>
      </div>
    </section>
  );
}

export const typingText = ["Full Stack web developer", "Laravel Application", "Wordpress Website", "Frontend Framework", "Solid Js", "React Js", "Next  Js", "Progressive Web App ( PWA )", "Application Programming Interface ( API )", "Artificial intelligence ( AI )", "Database"];
