/**
 * CSS Animation comonents  for solid js
 * @link https://sarthology.github.io/Animatopy/
 */
import { createSignal, onCleanup, onMount } from "solid-js";
import { AnchorAttr, ButtonAttr, Divattr, HAttr, Pattr, SpanAttr } from "../types/dom";
import { stringToMillisecond } from "../utils/str";
import "./animate.min.css";
import { AnimateProps, AnimationStyles } from "./type";

export function createAnimateStyle(
  motion: AnimationStyles,
  duration: string,
  infinite: boolean,
  style?: string
) {
  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  return `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite} 
          ${style}`;
}

type CreateAnimaParams = AnimateProps & {
  element: HTMLElement | undefined | Element;
};
export function createAnimate({
  element,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  observer: observering = {},
}: CreateAnimaParams) {
  //get default style of element
  const defaultStyle = element?.getAttribute("style") ?? "";

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, defaultStyle);

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && once) {
        element?.setAttribute("style", animateStyle);
      } else {
        //set style default style when the element unvisible and add both styles when visible
        element?.setAttribute(
          "style",
          entry.isIntersecting ? animateStyle : defaultStyle
        );
      }
    });
  }, observering);

  if (element) {
    observer.observe(element);
  }
}

export function later(time: number, callback: () => void): NodeJS.Timeout {
  return setTimeout(() => callback(), time);
}

export function div({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & Divattr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLDivElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <div ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </div>
  );
}

export function h1({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });
  return (
    <h1 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h1>
  );
}
export function h2({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <h2 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h2>
  );
}

export function h3({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <h3 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h3>
  );
}

export function h4({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <h4 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h4>
  );
}

export function h5({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    let timer: any | NodeJS.Timeout = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            //clear animation
            timer = later(stringToMillisecond(duration), () => {
              setVisible(false);
              observer.unobserve(element as Element);
              observer.disconnect();
            });
          }
        } else {
          setVisible(false);
        }
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <h5 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h5>
  );
}

export function h6({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & HAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLHeadingElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <h6 ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </h6>
  );
}

export function span({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & SpanAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLSpanElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <span ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </span>
  );
}

export function p({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & Pattr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLParagraphElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });
  return (
    <p ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </p>
  );
}

export function button({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & ButtonAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLButtonElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <button ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </button>
  );
}
export function a({
  style,
  once = true,
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: AnimateProps & AnchorAttr) {
  const [visible, setVisible] = createSignal(false);

  let element: HTMLAnchorElement | undefined;

  //create inline style for anmition
  const animateStyle = createAnimateStyle(motion, duration, infinite, style?.toString());

  onMount(() => {
    //init setTimeout with null
    let timer: any | NodeJS.Timeout = null;

    //create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && once) {
          setVisible(true);
          timer = later(stringToMillisecond(duration), () => {
            setVisible(false);
            observer.unobserve(entry.target);
            observer.disconnect();
          });
        }
        if (!once) setVisible(entry.isIntersecting);
      });
    }, observering);

    //push eleme to IntersectionObserver
    if (element) observer.observe(element);

    //cleanup all
    onCleanup(() => {
      observer.unobserve(element as Element);
      observer.disconnect();
      clearTimeout(timer);
    });
  });

  return (
    <a ref={element} style={visible() ? animateStyle : style} {...args}>
      {children}
    </a>
  );
}
