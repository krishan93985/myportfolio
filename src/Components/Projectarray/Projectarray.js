import React from "react";
import Project from "../Project/Project";
import projects from "../../projects";
import Button from "../Button/Button";
import "./Projectarray.css";

function Projectarray() {
  const link = "https://github.com/krishan93985?tab=repositories";

  return (
    <div id="projects">
      <h1 className="head" data-aos="fade-in" data-aos-once="true">
        PROJECTS
      </h1>
      <hr className="line" id="projects" />
      {projects.map((project, i) => (
        <Project
          key={project.id}
          usekey={project.id}
          Title={project.title}
          Src={project.src}
          Desc={project.desc}
          link={project.link}
          code={project.code}
          type={project.type}
        />
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <span className="more">
        <Button link={link} btnName={"See More Projects"} />
      </span>
    </div>
  );
}

export default Projectarray;
