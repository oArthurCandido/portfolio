import React from "react";
import { stackIcons, StackIconsInterface } from "../icons/StackIcons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/Tooltip";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  stack: string[];
  repoLink: string;
  productionLink?: string;
}

const ProjectCard = ({
  title,
  description,
  stack,
  repoLink,
  productionLink,
}: CardProps) => {
  return (
    <div className="p-1 mt-8 w-96 h-60 border dark:border-violet-700 rounded-md dark:hover:shadow-[#18f2b160] hover:shadow-lg bg-white dark:bg-black">
      <div className="flex flex-col justify-between flex-wrap">
        <span className="flex mx-auto mt-1">
          {stack.map((elem: string) => (
            <TooltipProvider key={elem}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="mx-1 dark:hover:text-indigo-600 hover:text-black">
                    {stackIcons[elem]}
                  </span>
                </TooltipTrigger>
                <TooltipContent>{elem.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </span>
        <h1 className="text-xl mt-1 font-extrabold">{title}</h1>
      </div>
      <div>
        <span className="font-extrabold text-lg font">Descrição:</span>
        <p className="font-sans inline ml-1">{description.split("|")[1]}</p>
      </div>
      <div className="mt-1 text-indigo-700 dark:text-indigo-400 font-bold ">
        <Link className="block " href={repoLink} target="_blank">
          Link do repositório
        </Link>
        <Link className=" block mt-2" href={productionLink} target="_blank">
          Link do app ao vivo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
