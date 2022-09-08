import React, { useState, useEffect } from "react";
import "./NavigationScroll.css";
import { Link } from "react-scroll";

const NavigationScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  console.log(scrollPosition);

  return (
    <ul className={scrollPosition < 191 ? "nav__side" : "nav__top"}>
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
