"use client";
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

const ProjectsSession = () => {
  const [allProjects, setAllProjects] = React.useState([]);
  const [filteredProjects, setFilteredProjects] = React.useState([]);
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.github.com/users/oarthurcandido/repos")
      .then((res) => res.json())
      .then((data) => setAllProjects(data))
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    setFilteredProjects(
      allProjects.filter(
        (project: Project) => project.topics.includes("gotoportfolio") === true
      )
    );
  }, [allProjects]);

  return (
    <section id="projects" className="relative min-h-screen snap-start">
      <LeftFLuidLine
        props={""}
        className="transform scale-x-[-1] absolute right-0 bottom-28"
        color="#EF13F2"
      />
      <div className="mx-auto max-w-5xl pt-10 flex justify-evenly  flex-wrap  w-full h-full">
        {filteredProjects.map((project: Project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            stack={project.topics}
            description={project.description}
            repoLink={project.html_url}
            productionLink={project.homepage}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSession;
