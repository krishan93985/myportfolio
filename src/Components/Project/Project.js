import React from "react";
import Button from "../Button/Button";
//import List from "./List";
import "./Project.css";

const btnName = "See Live";

function Project({ useKey, Title, Src, Desc, link, code }) {
  return (
    <div className="element area">
      <div
        className="exp"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-once="true"
      >
        <h2>{Title}</h2>
        <ul>
          {Desc.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <span>
          <Button btnName={btnName} link={link} />
          <a href={code} className="Code">
            Source Code
          </a>
        </span>
      </div>
      <a
        href={link}
        className="wrapper"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-delay="500"
        data-aos-anchor-placement=".exp"
      >
        <img src={Src} alt="icon" />
      </a>
    </div>
  );
}

export default Project;
