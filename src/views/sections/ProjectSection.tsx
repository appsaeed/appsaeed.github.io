import { Link } from "@solidjs/router";
import { FiCode } from "solid-icons/fi";
import { VsLiveShare } from "solid-icons/vs";
import { For, JSX, JSXElement } from "solid-js";
import Image from "../../components/Image";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import sections from "../../data/className/sections";

const projects = [
  {
    name: "",
    title: "Car rental",
    image: "/src/assets/carrent.png",
    description: `Web-based platform that allows users to search, book, and manage car
  rentals from various providers, providing a convenient and efficient
  solution for transportation needs.`,
    tags: ["react", "mongodb", "nodejs"],
  },
  {
    name: "",
    title: "Job IT",
    image: "/src/assets/jobit.png",
    description: `Web application that enables users to search for job openings, view
    estimated salary ranges for positions, and locate available jobs based on
    their current location.`,
    tags: ["react", "mongodb", "nodejs"],
  },
  {
    name: "",
    title: "Trip guide",
    image: "/src/assets/tripguide.png",
    description: `A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular
    destinations.`,
    tags: ["react", "mongodb", "nodejs"],
  },
];

export default function ProjectSection(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <section class={`${sections.common} ${props.class}`} {...props}>
      <SectionHeader text="Most recents projects" />
      <SectionDescription
        text="Following projects showcases my skills and experience through real-world examples of
      my work. Each project is briefly described with links to code repositories and live
      demos in it. It reflects my ability to solve complex problems, work with different
      technologies, and manage projects effectively."
      />

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <For each={projects}>{(project) => <ProjectCard {...project} />}</For>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  image: string;
  description: JSXElement;
  tags: Array<any>;
  name?: string;
}
export function ProjectCard({ title, image, description, tags }: ProjectCardProps) {
  return (
    <div class=" bg-zinc-800 p-4  rounded-3xl  w-full">
      <div class="relative w-full h-80">
        <Image url={image} alt={title} class=" w-full h-full rounded-3xl" />
        <div class="absolute inset-0 flex  m-3 gap-2 justify-end">
          <div class="w-8 h-8 p-1  rounded-full bg-gray-500 text-center items-center align-middle text-2xl hover:bg-gray-600">
            <Link href="#" target="_blank">
              <VsLiveShare class="" />
            </Link>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h3 class="text-white font-bold text-2xl">{title}</h3>
        <p class="my-2 text-sm font-light">{description}</p>
      </div>
      <div class="mt-4 flex gap-2">
        <FiCode class="mt-1" />
        <For each={tags}>
          {(tag) => (
            <Link href="#" class=" text-blue-600 hover:underline">
              #{tag}
            </Link>
          )}
        </For>
      </div>
    </div>
  );
}
