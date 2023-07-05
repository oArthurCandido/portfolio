import React from "react";

const ProjectsSession = () => {
  const boxSettings = "w-96 h-1/4";

  return (
    <section id="projects" className="h-[100vh] bg-rebel-purple snap-start">
      <div className=" relative flex justify-evenly flex-wrap  w-full h-full">
        <div className={`bg-rebel-green ${boxSettings} `}></div>
        <div className={`bg-rebel-pink ${boxSettings}`}></div>
        <div className={`bg-rebel-blue ${boxSettings}`}></div>
        <div className={`bg-rebel-black ${boxSettings}`}></div>
      </div>
    </section>
  );
};

export default ProjectsSession;
