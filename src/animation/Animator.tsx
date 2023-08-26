/**
 * CSS Animation comonents  for solid js
 * @link https://sarthology.github.io/Animatopy/
 */
import { ButtonAttr, Divattr, HAttr, Pattr } from "../types/dom";
import "./animate.min.css";
type AnimationStyles =
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceInUp"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "bounceOutUp"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "flip"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "rotateIn"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight"
  | "rotateOut"
  | "rotateOutDownLeft"
  | "rotateOutDownRight"
  | "rotateOutUpLeft"
  | "rotateOutUpRight"
  | "slideInUp"
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutUp"
  | "slideOutDown"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomInUp"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutLeft"
  | "zoomOutRight"
  | "zoomOutUp"
  | "hinge"
  | "jackInTheBox"
  | "rollIn"
  | "rollOut";
type AnimateProps = {
  motion?: AnimationStyles;
  duration?: string;
  infinite?: boolean;
};

type DivAnimateProps = AnimateProps & Divattr;
export function div({
  style = "",

  class: className = "",
  duration = "1s",
  motion = "lightSpeedIn",
  infinite = false,
  children,
  ...args
}: DivAnimateProps) {
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
    <div {...args} style={`${classes} ${style}`} class={`${motion} ${className}`}>
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
