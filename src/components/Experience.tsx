//@ts-ignore
import { Motion } from "@motionone/solid";
import { Component } from "solid-js";

import { experiences } from "../constants";
import { styles } from "../styles";

const ExperienceCard: Component<{ experience: any }> = ({ experience }) => {
  return (
    <div
      style={{
        background: "#1d1836",
        color: "#fff",
        "border-right": "7px solid  #232631",
        "background-image": experience.iconBg,
      }}
    >
      <div>
        <h3 class="text-white text-[24px] font-bold">{experience.title}</h3>
        <p class="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul class="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any) => (
          <li class="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <Motion.div>
        <p class={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 class={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </Motion.div>

      <div class="mt-20 flex flex-col">
        <div>
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
