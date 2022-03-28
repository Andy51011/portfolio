import React, { useState, useEffect } from "react";
import "./Skills.css";
import { DiJavascript1 } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      // clean up
      return () => 
      window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
      let heightToShow = 1000;
      const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
        if (winScroll > heightToShow) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
  }


  return (
    <>
      <h1>Skills</h1>
      <div className="skill-container">
        {isVisible && (
          <>
            <div className={"skill-item"}>
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
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
