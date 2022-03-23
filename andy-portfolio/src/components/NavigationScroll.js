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
        </Link>
        <GrGamepad />
      </li>
      <li>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          About Me
        </Link>
        <BsPersonCircle />
      </li>
      <li>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          Contact
        </Link>
        <RiContactsBook2Line />
      </li>
    </ul>
  );
};

export default NavigationScroll;
