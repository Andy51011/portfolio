import React from "react";
import UserCard from "./UserCard";
import "./MainBar.css";

const MainBar = () => {
  const myInfo = {
    name: "Andy Yuen",
    github: "https://github.com/andy51011",
    picture: "someurl",
    address: "2032 Sandcreek Way, Alameda, CA 94501",
    interests: "Hiking, Biking, and Fishing",
    skills: "JavaScript, Java, React, HTML, CSS, SCSS, SpringBoot, Spring",
    linkedin: "https://www.linkedin.com/in/andy-yuen-6768a8142/",
    resume: "text",
  };
  return (
    <div style={{ height: 500 }} className="center-content">
      <div className="child">
        <h1>Welcome To My Portfolio!</h1>
        <UserCard myInfo={myInfo} />
      </div>
    </div>
  );
};

export default MainBar;
