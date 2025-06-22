import React from "react";
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
  SiAstro,
  SiSanity
} from "react-icons/si";

export interface StackIconsInterface {
  [key: string]: React.ComponentType<{ className?: string }>;
}

export const stackIcons: StackIconsInterface = {
  tailwind: SiTailwindcss,

   nextjs: SiNextdotjs,

  reactjs: SiReact,

  supabase: SiSupabase,

  prisma: SiPrisma,

  github: SiGithub,

  git: SiGit,

  html: SiHtml5,

  css: SiCss3,
  
  html5: SiHtml5,

  css3: SiCss3,

  python: SiPython,

  javascript: SiJavascript,

  typescript: SiTypescript,

  "material-ui": SiMui,

  vite: SiVite,

  astrojs: SiAstro,

  sanity: SiSanity
};
