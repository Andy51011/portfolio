import React from "react";
import ProjectList from "./ProjectList";

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
        <h1>My Projects!</h1>
        <ProjectList />
      </div>
      <div id="contact" style={{ height: 500 }}>
        <h1>Contact</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
    </>
  );
};

export default MiddleSection;
