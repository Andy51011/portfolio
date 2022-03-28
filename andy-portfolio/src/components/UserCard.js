import React, { useState } from "react";
import "./userCard.css";
import portrait from "./background/portrait.jpg";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

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
      <div className="card-info">
        <div className="item-name">{myInfo.name}</div>
        <div className="item-name2">Fullstack Software Engineer</div>
        <div id="item-card" className="item-github">
          <a target="_blank" onMouseEnter={() => showIcon(false)} onMouseLeave={() => showIcon(true)}href={myInfo.github}>
            {isShown === true ? <FaGithub /> : < FiGithub />}
          </a>
        </div>
        <div id="item-card" className="item-linkedin">
          <a target="_blank" onMouseEnter={() => showLinkedinIcon(false)} 
             onMouseLeave={() => showLinkedinIcon(true)} href={myInfo.linkedin}>
            {linkedin === true ? <AiFillLinkedin /> : <AiOutlineLinkedin / >}
          </a>
        </div>
      </div>
      </>
  );
};

export default UserCard;
