import React from "react";
import { Link } from "react-scroll";
import icon from "./icon.png";
import codechef from "./codechef.png";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav sticky" id="navbar">
      <a href="https://krishan93985.github.io/myportfolio/" className="icon">
        <img src={icon} alt="icon" width="100px" height="100%" />
      </a>
      <a href="https://www.codechef.com/users/krishan12345" className="cp">
        <img src={codechef} alt="icon" />
      </a>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <span>Projects</span>
      </Link>

      <Link
        activeClass="active"
        to="techstack"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <span>Tech Stack</span>
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <span id="lastLi">Contact</span>
      </Link>
    </div>
  );
}

export default NavBar;
