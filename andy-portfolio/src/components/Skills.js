import React from "react";
import "./Skills.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className="skill-container">
        <div className="skill-item">
          JavaScript
          <DiJavascript1 />
        </div>
        <div className="skill-item">
          Java
          <SiJava />
        </div>
        <div className="skill-item">
          React
          <DiReact />
        </div>
        <div className="skill-item">
          Springboot
          <SiSpringboot />
        </div>
        <div className="skill-item">
          Hibernate
          <SiHibernate />
        </div>
        <div className="skill-item">
            PostgreSQL
            <SiPostgresql />
        </div>
      </div>
    </>
  );
};

export default Skills;
