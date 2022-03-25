import React from "react";
import "./Skills.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";

const Skills = () => {
  return (
    <>
        Skills
      <div className="skills-container">
        <div>
            JavaScript
          <DiJavascript1 />
        </div>
        <div>
            Java
            <SiJava />
        </div>
        <div>
            React
            <DiReact />
        </div>
            Springboot
            <SiSpringboot />
        <div>
            Hibernate
            <SiHibernate />
        </div>
      </div>
    </>
  );
};

export default Skills;
