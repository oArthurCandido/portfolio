// "use client";
import LeftFLuidLine from "@/components/shapes/LeftFLuidLine";
import ProjectCard from "@/components/ui/ProjectCard";
import React from "react";

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

interface Dictionary {
  dictionary: {
    description: string;
    repositoryLink: string;
    liveDemo: string;
  };
}

const ProjectsSession = async ({ dictionary }: Dictionary) => {
    const response = await fetch("https://api.github.com/users/oarthurcandido/repos?per_page=100");
    const repos = await response.json();
    const filteredProjects = repos.filter((project: Project) => project.topics.includes("gotoportfolio") === true)

  return (
    <section id="projects" className="relative min-h-screen snap-start">
      <LeftFLuidLine
        props={""}
        className="transform scale-x-[-1] absolute right-0 bottom-28"
        color="#EF13F2"
      />
      <div className="flex flex-wrap w-full h-full max-w-5xl pt-10 mx-auto justify-evenly">
        {filteredProjects.map((project: Project) => (
          <ProjectCard
            dictionary={dictionary}
            key={project.name}
            title={project.name}
            stack={project.topics}
            fullDescription={project.description}
            repoLink={project.html_url}
            productionLink={project.homepage}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSession;
