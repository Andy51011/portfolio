import React from "react";
import "./About.css";

import { GiBoatFishing } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { AiOutlineFormatPainter } from "react-icons/ai"; 

const About = () => {
  return (
    <>
      <div id="about-container">
        <div id="title">Who Am I?</div>
        <div className="about-item">
          <AiOutlineFormatPainter />
          Software Engineer
        </div>
        <div className="about-item-two">
          <BsBuilding />
          Interest in building responsive and modern websites
        </div>
        <div className="about-item">
          <FaBrain />
          Problem Solving
        </div>
        <div className="about-item-two">
         <GiBoatFishing className="icon-fish" />
          Advid hiker and fisherman
        </div>
      </div>
    </>
  );
};

export default About;
