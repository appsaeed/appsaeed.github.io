/**
 * CSS Animation comonents  for solid js
 * @link https://sarthology.github.io/Animatopy/
 */
import { createSignal, onCleanup, onMount } from "solid-js";
import { cssToMillisecond } from "utilies";
import { AnchorAttr, ButtonAttr, Divattr, HAttr, Pattr, SpanAttr } from "../types/dom";
import "./animate.css";
import { AnimateProps, AnimationMotion } from "./type";

type CreateAnimaParams = AnimateProps & {
    element: HTMLElement | undefined | Element;
};
export function createAnimate({ element, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, observer: observering = {} }: CreateAnimaParams) {
    //timer var init
    let timer: string | number | NodeJS.Timeout | undefined;

    //get default style of element
    const defaultStyle = element?.getAttribute("style") ?? "";

    //create inline style for anmition
    const animateStyle = createAnimateStyle(motion, duration, infinite, defaultStyle);

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && once) {
                //set inline style when section is visited
                entry.target.setAttribute("style", animateStyle);

                //clear inline style added for animation and unsuscribe observer
                timer = later(cssToMillisecond(duration), () => {
                    entry.target.setAttribute("style", defaultStyle);
                    observer.unobserve(entry.target);
                    observer.disconnect();
                    clearTimeout(timer);
                });

                return false;
            }

            if (!once) {
                entry.target.setAttribute("style", entry.isIntersecting ? animateStyle : defaultStyle);
                return false;
            }
        });
    }, observering);

    //add element to observer
    if (element) observer.observe(element);

    return observer;
}

export function div({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & Divattr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function h1({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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
export function h2({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function h3({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function h4({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function h5({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                        timer = later(cssToMillisecond(duration), () => {
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

export function h6({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & HAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function span({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & SpanAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function p({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & Pattr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

export function button({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & ButtonAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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
export function a({ style, once = true, duration = "1s", motion = "lightSpeedIn", infinite = false, children, observer: observering = {}, ...args }: AnimateProps & AnchorAttr) {
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
                    timer = later(cssToMillisecond(duration), () => {
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

/**
 * ==================================================
 * ==================================================
 */
/**
 * Create animation inline style
 * @param motion
 * @param duration
 * @param infinite
 * @param style
 * @returns {string}
 */
export function createAnimateStyle(motion: AnimationMotion, duration: string | number = '1s', infinite: boolean = false, style: string = ''): string {
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

/**
 * Use later function to setTimeout shortly
 * @param time
 * @param callback
 * @returns {NodeJS.Timeout}
 */
export function later(time: number, callback: () => void): NodeJS.Timeout {
    return setTimeout(() => callback(), time);
}
