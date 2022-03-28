import React from "react";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About.";

const MiddleSection = () => {
  return (
    <>
      <div id="about" style={{ height: 500 }}>
        {<About />}
      </div>
      <div id="projects" style={{ height: 500 }}>
        <ProjectList />
      </div>

      <div id="skills" style={{ height: 500 }}>
        <Skills />
      </div>

      <div id="contact" style={{ height: 300 }}>
        <Contact />
      </div>
    </>
  );
};

export default MiddleSection;
