/**
 * CSS Animation comonents  for solid js
 * @link https://sarthology.github.io/Animatopy/
 */
import { createSignal, onCleanup, onMount } from "solid-js";
import { ButtonAttr, Divattr, HAttr, Pattr } from "../types/dom";
import { stringToMillisecond } from "../utils/str";
import "./animate.min.css";
import { AnimateProps } from "./type";
type DivAnimateProps = AnimateProps & Divattr;
export function div({
  style = "",
  once = true,
  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  observer: observering = {},
  ...args
}: DivAnimateProps) {
  let divRef: HTMLDivElement | undefined;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    let timer;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
          timer = setTimeout(
            () => {
              setVisible(!entry.isIntersecting);
            },
            stringToMillisecond(duration) + 100
          );
        }
      });
    }, observering);

    if (divRef) {
      observer.observe(divRef);
    }

    onCleanup(() => {
      observer.unobserve(divRef as Element);
      observer.disconnect();
      timer = null;
    });
  });

  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  const styles = `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite}
          ${style}
  `;

  const classes = `${motion} ${className}`;

  return (
    <div
      ref={divRef}
      style={visible() ? styles : style}
      class={visible() ? classes : className}
      {...args}
    >
      {children}
    </div>
  );
}

type HAnimateProps = AnimateProps & HAttr;
export function h2({
  style = "",
  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  ...args
}: HAnimateProps) {
  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  const classes = `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite}
  `;

  return (
    <h2 {...args} style={`${classes} ${style}`} class={`${motion} ${className}`}>
      {children}
    </h2>
  );
}

export function h1({
  style = "",
  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  ...args
}: HAnimateProps) {
  let dev: HTMLDivElement | undefined;

  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  const classes = `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite}
  `;

  return (
    <h1
      {...args}
      ref={dev}
      style={`${classes} ${style}`}
      class={`${motion} ${className}`}
    >
      {children}
    </h1>
  );
}

type ButtonAnimateProps = AnimateProps & ButtonAttr;
export function button({
  style = "",
  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  ...args
}: ButtonAnimateProps) {
  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  const classes = `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite}
  `;

  return (
    <button {...args} style={`${classes} ${style}`} class={`${motion} ${className}`}>
      {children}
    </button>
  );
}
type PAnimateProps = AnimateProps & Pattr;
export function p({
  style = "",
  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  ...args
}: PAnimateProps) {
  const _infinite = infinite ? "animation-iteration-count: infinite;" : "";
  const classes = `
          -webkit-animation-name: ${motion};
          animation-name: ${motion};
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: ${duration};
          animation-duration: ${duration};
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          ${_infinite}
  `;

  return (
    <p {...args} style={`${classes} ${style}`} class={`${motion} ${className}`}>
      {children}
    </p>
  );
}
