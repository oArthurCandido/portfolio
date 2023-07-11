import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiPrisma,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiVite,
} from "react-icons/si";

// export const stackIcons = [
//   {
//     name: "TailwindCSS",
//     icon: <SiTailwindcss className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "NextJS",
//     icon: <SiNextdotjs className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "ReactJS",
//     icon: <SiReact className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "Supabase",
//     icon: <SiSupabase className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "Prisma",
//     icon: <SiPrisma className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "Github",
//     icon: <SiGithub className="text-rebel-pink text-4xl" />,
//   },
//   {
//     name: "Git",
//     icon: <SiGit className="text-rebel-pink text-4xl" />,
//   },
// ];

export interface StackIconsInterface {
  [key: string]: JSX.Element;
}

export const stackIcons: StackIconsInterface = {
  tailwind: <SiTailwindcss className=" text-4xl" />,

  nextjs: <SiNextdotjs className=" text-4xl" />,

  reactjs: <SiReact className=" text-4xl" />,

  supabase: <SiSupabase className=" text-4xl" />,

  prisma: <SiPrisma className=" text-4xl" />,

  github: <SiGithub className=" text-4xl" />,

  git: <SiGit className=" text-4xl" />,

  html: <SiHtml5 className=" text-4xl" />,

  css: <SiCss3 className=" text-4xl" />,

  python: <SiPython className=" text-4xl" />,

  javascript: <SiJavascript className=" text-4xl" />,

  typescript: <SiTypescript className=" text-4xl" />,

  "material-ui": <SiMui className=" text-4xl" />,

  vite: <SiVite className=" text-4xl" />,
};
