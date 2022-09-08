import React from "react";
import ProjectList from "./ProjectList";
import Contact from "../contact/Contact";
import Skills from "./Skills";
import About from "../about/About";
import "./MiddleSection.css";

const MiddleSection = () => {
  return (
    <>
      <div id="about" style={{ height: 500 }}>
        {<About />}
      </div>
      <div id="projects" style={{ height: 250 }}>
        <ProjectList />
      </div>

      <div id="skills" style={{ height: 250 }}>
        <Skills />
      </div>

      <div id="contact" style={{ height: 250 }}>
        <Contact />
      </div>
    </>
  );
};

export default MiddleSection;
