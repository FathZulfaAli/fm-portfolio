import React from "react";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="mt-28 flex flex-col items-center justify-center"
      >
        <div className="text-pretty text-center font-coolvetica text-6xl">
          <h1>Projects</h1>
          <h6 className="text-pretty font-cabin text-xl">
            List of all the projects I have done
          </h6>
        </div>
        <div></div>
        <ProjectCard />
      </section>
    </>
  );
}

export default Projects;
