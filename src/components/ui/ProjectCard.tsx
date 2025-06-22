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
  fullDescription: string;
  stack: string[];
  repoLink: string;
  productionLink?: string;
  dictionary: {
    description: string;
    repositoryLink: string;
    liveDemo: string;
  };
}

const ProjectCard = ({
  title,
  fullDescription,
  stack,
  repoLink,
  productionLink,
  dictionary,
}: CardProps) => {
  const isPt = dictionary.description === "Descrição" ? 1 : 0;

  return (
    <div className="py-6 px-8 mt-8 border dark:border-violet-700 rounded-md dark:hover:shadow-[#18f2b160] hover:shadow-lg bg-white dark:bg-black">
      <div className="flex flex-col flex-wrap justify-between">
        <span className="flex mx-auto mt-1">
          {stack.map((elem: string) => (
             stackIcons[elem] ?
              <TooltipProvider key={elem}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="mx-1 dark:hover:text-indigo-600 hover:text-black">
                    {React.createElement(stackIcons[elem], { className: "text-4xl" })}
                  </span>
                </TooltipTrigger>
                <TooltipContent>{elem.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            :
            null
          
          ))}
        </span>
        <h1 className="mt-6 text-2xl font-extrabold capitalize">{title.replace("-", " ")}</h1>
      </div>
      <div className="mt-2">
        <span className="text-lg font-extrabold font">
          {dictionary.description}:
        </span>
        <p className="inline ml-1 font-sans">
          {fullDescription.split("|")[isPt]}
        </p>
      </div>
      <div className="mt-2 font-bold text-indigo-700 transition dark:text-indigo-400" >
        <Link className="block transition duration-300 hover:text-black hover:dark:text-white" href={repoLink} target="_blank">
          {dictionary.repositoryLink}
        </Link>
        {productionLink && (
          <Link className="block mt-1 transition duration-300 hover:text-black hover:dark:text-white" href={productionLink} target="_blank">
            {dictionary.liveDemo}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
