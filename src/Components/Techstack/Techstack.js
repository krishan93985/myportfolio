import React from "react";
import css3 from "./Assets/css3.png";
import html5 from "./Assets/html5.png";
import react from "./Assets/react.png";
import redux from "./Assets/redux.png";
import postgresql from "./Assets/postgresql.png";
import nodejs from "./Assets/nodejs.png";
import js from "./Assets/js.png";
import cpp from "./Assets/cpp.png";
import expressjs from "./Assets/express.png";
import git from "./Assets/git.png";
import github from "./Assets/github.png";
import heroku from "./Assets/heroku.png";
import npm from "./Assets/npm.png";
import vscode from "./Assets/vscode.png";
import mongodb from "./Assets/mongodb.png";
import docker from "./Assets/docker.png";
import jest from "./Assets/jest.png";
import CircleCi from "./Assets/circleci.png";
import jwt from "./Assets/jwt.jpg";
import "./Techstack.css";

function Techstack() {
  return (
    <div className="tech" id="techstack">
      <h1 className="head" data-aos="fade-out" data-aos-once="true">
        TECH STACK
      </h1>
      <hr className="line" id="techstack" />
      <h3>My tech stack</h3>
      <div className="stack" data-aos="zoom-out-up" data-aos-once="true">
        <img src={html5} alt="icon" />
        <img src={css3} alt="icon" />
        <img src={js} alt="icon" />
        <img src={cpp} alt="icon" />
        <img src={react} alt="icon" />
        <img src={redux} alt="icon" />
        <img src={nodejs} alt="icon" />
        <img src={expressjs} alt="icon" />
        <img src={postgresql} alt="icon" />
        <img src={mongodb} alt="icon" />
      </div>
      <h3>Development Tools</h3>
      <div
        className="stack"
        data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <img src={heroku} alt="icon" />
        <img src={git} alt="icon" />
        <img src={vscode} alt="icon" />
        <img src={npm} alt="icon" />
        <img src={github} alt="icon" />
        <img src={docker} alt="icon"/>
        <img src={jest} alt="icon" />
        <img src={CircleCi} alt="icon"/>
        <img src={jwt} alt="icon" />
      </div>
    </div>
  );
}

export default Techstack;