import React from "react";
import { Link } from "react-scroll";
import "./View.css";

function View() {
  return (
    <div className="view">
      <h1 data-aos="fade-right" data-aos-delay="180" data-aos-once="true">
        Hi my name is <span>Krishan Gopal</span>
        <br />I am the developer you need.
      </h1>
      <p data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <span className="hire">Hire me</span>
        </Link>
      </p>
    </div>
  );
}

export default View;
