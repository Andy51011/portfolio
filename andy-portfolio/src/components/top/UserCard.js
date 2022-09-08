import React, { useState } from "react";
import "./userCard.css";
import portrait from "../background/portrait.jpg";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import resume from "../resume/AndyYuenResume.pdf";

const UserCard = ({ myInfo }) => {
  const [isShown, setIsShown] = useState(true);
  const [linkedin, setLinkedin] = useState(true);

  const showIcon = (bool) => {
    setIsShown(bool);
  };

  const showLinkedinIcon = (bool) => {
    setLinkedin(bool);
  };

  return (
    <>
      <div className="img-container">
        <img className="usercard-img" src={portrait} alt="person-icon" />
      </div>
      <div className="card__container">
        <div className="card__item">{myInfo.name}</div>
        <div className="card__item">Fullstack Developer</div>
        <div id="item__card" className="card__item">
          <a
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => showIcon(false)}
            onMouseLeave={() => showIcon(true)}
            href={myInfo.github}
          >
            {isShown === true ? <FaGithub /> : <FiGithub />}
          </a>
        </div>
        <div id="item__card" className="card__item">
          <a
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => showLinkedinIcon(false)}
            onMouseLeave={() => showLinkedinIcon(true)}
            href={myInfo.linkedin}
          >
            {linkedin === true ? <AiFillLinkedin /> : <AiOutlineLinkedin />}
          </a>
        </div>
        <div id="resume_link" className="card__item">
          <a target="_blank" rel="noreferrer" href={resume}>
            {" "}
            Check out my resume!
          </a>
        </div>
      </div>
    </>
  );
};

export default UserCard;
