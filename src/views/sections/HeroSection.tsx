import { loadImage } from "appmon/load";
import { FiDownload } from "solid-icons/fi";
//@ts-ignore
import { onCleanup, onMount } from "solid-js";
import { random } from "utilies";
import Animate from "../../animation";
import { createAnimateStyle } from "../../animation/Animator";
import { AnimationMotion } from "../../animation/type";
import assets from "../../assets";
import { HtmlAttr } from "../../types/dom";

export default function (props: HtmlAttr) {
  let slides: HTMLParagraphElement | undefined;

  onMount(() => {
    if (slides) {
      const timer = 6000;
      const children = [...slides.children];
      const animates = [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "heartBeat",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp",
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp",
        "fadeIn",
        "fadeInDown",
        "fadeInLeft",
        "fadeInRight",
        "fadeInUp",
        "fadeInUpBig",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "flip",
        "flipInX",
        "flipOutX",
        "flipOutY",
        "lightSpeedIn",
        "lightSpeedOut",
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight",
        "slideInUp",
        "slideInDown",
        "slideInLeft",
        "slideInRight",
        "slideOutUp",
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp",
        "hinge",
        "jackInTheBox",
        "rollInOut"
      ] as const;
      const animateName: AnimationMotion = animates[random(0, animates.length)]
      const duration = `${timer}ms`;

      function hideChildren(child: Element) {
        const style = child.getAttribute('style') || ''
        child.setAttribute('style', `visibility:hidden; ${style}`);
      }
      children.forEach(hideChildren)

      function slideShow(animate: AnimationMotion, elm: Element | undefined | null) {
        console.log(animate)
        if (elm && elm?.tagName) {
          const getStyle = elm.getAttribute('style')?.replace('visibility:hidden;', '') || '';
          const animateStyle = createAnimateStyle(animate, duration)
          elm.setAttribute('style', getStyle + animateStyle)
          elm.setAttribute('data-animate', 'true')
        }
      }

      function slideHide(elm: Element | undefined | null) {
        if (elm && elm?.tagName) {
          elm.setAttribute('style', `visibility:hidden;`)
          elm.setAttribute('data-animate', 'false')
        }
      }

      slideShow(animateName, children[0])

      const interval = setInterval(() => {
        const animateElm = document.querySelector('[data-animate="true"]');
        slideHide(animateElm)
        slideShow(animates[random(0, animates.length)], animateElm?.nextElementSibling || children[0])
      }, timer)

      onCleanup(() => {
        clearTimeout(interval)
      })
    }
  })

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
        <Animate.h1 class="mb-20 text-3xl font-extrabold   text-slate-300">
          I'm <span class=" font-bold text-6xl">Saeed</span> Hossen
        </Animate.h1>
        <div ref={slides} class="relative w-full mb-28 text-4xl font-extrabold  text-white h-10">
          <p>
            Full-Stack web development
          </p>
          <p >
            Laravel Application
          </p>
          <p>
            Frontend Framework
          </p>
          <p>
            TailwindCSS | RectJS
          </p>
          <p >
            Artificial intelligence
          </p>
          <p >
            Datebase & Rest API
          </p>
        </div>

        <Animate.h2 motion="slideInUp" class="mb-20 text-3xl">
          Full-stack developer with expertise in JavaScript, Laravel, ReactJS, AI, and TailwindCSS. Building modern web applications with a focus on APIs. <b>Open to new opportunities!</b>
        </Animate.h2>

        <Animate.a href="/saeed-cv.pdf" download={'Saeed CV for web development job'} motion="slideInUp" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2" >
          <FiDownload style={{ display: 'inline' }} />  Download CV
        </Animate.a>
      </div>
    </section>
  );
}

export const typingText = ["Full Stack web developer", "Laravel Application", "Wordpress Website", "Frontend Framework", "Solid Js", "React Js", "Next  Js", "Progressive Web App ( PWA )", "Application Programming Interface ( API )", "Artificial intelligence ( AI )", "Database"];
