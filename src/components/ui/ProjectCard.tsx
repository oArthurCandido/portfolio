import React from "react";
import { stackIcons, StackIconsInterface } from "../icons/StackIcons";

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
    <div className="p-1 mt-8 w-96 h-60 border dark:border-violet-700 rounded-md dark:hover:shadow-[#18f2b160] hover:shadow-lg">
      <div className="flex flex-col justify-between flex-wrap">
        <span className="flex mx-auto mt-1">
          {stack.map((elem: string) => (
            <span key={elem} className="mx-1">
              {stackIcons[elem]}
            </span>
          ))}
        </span>
        <h1 className="text-xl mt-1 font-extrabold">{title}</h1>
      </div>
      <div className="mt-1">
        <span className="font-extrabold text-lg font">Descrição:</span>
        <p className="font-sans inline ml-1">{description.split("|")[1]}</p>
      </div>
      <div className="mt-1">
        <a className="block" href={repoLink}>
          Link repositório
        </a>
        <a href={productionLink} target="_blank">
          Link produção
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
