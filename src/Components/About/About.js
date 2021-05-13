import React from "react";
import profile from "./profile.jpeg";
import resume from "./resume.pdf";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <h1
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        ABOUT ME
      </h1>
      <section className="sec">
        <img
          src={profile}
          alt="dp"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        />
        <div
          className="desc"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="180"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <ul>
            <li>
              I am a passionate <span>Coder, Competitive programmer</span> and a{" "}
              <span>Web developer</span> , having a good grasp on Data
              Structures and Algorithms.
            </li>
            <li>
              I have learned web development so far and heading towards learning
              curve of <span>Cloud Computing</span>
            </li>
            <li>
              I keep learning new tools and technologies and feel an Identity
              shift in me everyday.
            </li>
          </ul>
          <a href={resume} className="resume">
            view resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
