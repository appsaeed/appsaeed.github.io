import { avatar } from "appmon/generate";
import { getThemeStore, setThemeStore } from "appmon/storage";
import { initFlowbite } from "flowbite";
import { FiMoon, FiSun } from "solid-icons/fi";
import { For, createSignal, onMount } from "solid-js";
import Image from "../../components/Image";
import sections from "../../data/className/sections";
import menusdata from "../../data/menus";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const umenu = "companies|ai|testimonials|manage";
  const menus = menusdata.filter((f) => !umenu.includes(f.name));
  const [fixed, setFixed] = createSignal(false);
  onMount(() => {
    initFlowbite();
  });

  onMount(() => {
    if (document.documentElement.scrollTop > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    window.addEventListener("scroll", function () {
      const offset = document.documentElement.scrollTop;
      if (offset > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <header
      id="header"
      class={`transition-all z-[999] top-0 left-0 right-0 w-full bg-white border-gray-200 dark:bg-gray-900 ${
        fixed() ? "fixed py-3" : "py-4"
      }`}
    >
      <nav class={`${sections.headerfooter.common} w-full`}>
        <div class="w-full flex flex-wrap items-center justify-between mx-auto">
          <BrandLogo />

          <SwtichTheme />

          <div class="flex items-center md:order-2">
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <Image
                class="w-8 h-8 rounded-full"
                src={avatar("saeed")}
                alt="user photo"
              />
            </button>
            <div
              class="z-50 hidden md:ml-6 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <For each={menus}>
                {({ name }) => {
                  return <MenuList name={name} />;
                }}
              </For>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

type MenuListProps = {
  index?: number;
  name: string;
};
export function MenuList({ name }: MenuListProps) {
  return (
    <li>
      <a
        href={`#${name}`}
        class={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize`}
      >
        {name}
      </a>
    </li>
  );
}

export function SwtichTheme() {
  const [dark, setDark] = createSignal(getThemeStore() === "dark");

  const handleTheme = () => {
    const theme = dark() ? "light" : "dark";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(theme);
    setThemeStore(theme);
    setDark(!dark());
  };

  return (
    <div
      onClick={handleTheme}
      class={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer text-2xl`}
    >
      {dark() ? <FiMoon /> : <FiSun />}
    </div>
  );
}
