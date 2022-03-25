import React from "react";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

const MiddleSection = () => {
  return (
    <>
      <div id="about" style={{ height: 500 }}>
        <h1>About Me</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="projects" style={{ height: 500 }}>
        <ProjectList />
      </div>
      <div id="skills" style={{height: 500}}>
      </div>
      <div id="contact" style={{ height: 500 }}>
        <Contact />
      </div>
    </>
  );
};

export default MiddleSection;
