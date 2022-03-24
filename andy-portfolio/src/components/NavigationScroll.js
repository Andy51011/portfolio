import React from "react";
import "./NavigationScroll.css";
import { Link } from "react-scroll";
import { GrGamepad } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
const NavigationScroll = () => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
      }}
    >
      <li>
        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          Projects
          <GrGamepad className="nav-icons" />
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          About Me
          <BsPersonCircle className="nav-icons" />
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          Contact
          <RiContactsBook2Line className="nav-icons" />
        </Link>
      </li>
    </ul>
  );
};

export default NavigationScroll;
