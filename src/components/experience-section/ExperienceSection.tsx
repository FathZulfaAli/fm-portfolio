import React from "react";
import Resume from "./Resume";
import TechTools from "./TechTools";
import Experience from "./Experience";
// import Projects from "./Projects";

function ExperienceSection() {
  return (
    <>
      <Experience />
      <Resume />
      {/* TODO add this <Projects /> */}
      <TechTools />
    </>
  );
}

export default ExperienceSection;
