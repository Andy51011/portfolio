import React from "react";
import "./NavigationScroll.css";
import { Link } from "react-scroll";
import { GrGamepad } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
const NavigationScroll = () => {
  return (
    <ul>
      <li>
        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="skills" spy={true} smooth={true}>
          Skills
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          About Me
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavigationScroll;
