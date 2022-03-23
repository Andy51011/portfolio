import React from "react";
import "./userCard.css"
import portrait from "./background/portrait.jpg"

const UserCard = ({ myInfo }) => {
  return (
    <div className="card-container">
      <div className="img-container">
          <img className="usercard-img" src={portrait} alt="person-icon" />
      </div>
      <div className="card-info">
        <ul className="list-info">
          <li>{myInfo.name}</li>
          <li>{myInfo.github}</li>
          <li>{myInfo.address}</li>
          <li>{myInfo.interests}</li>
          <li>{myInfo.skills}</li>
          <li>{myInfo.linkedin}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
