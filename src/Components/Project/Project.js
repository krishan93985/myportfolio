import React from "react";
import Button from "../Button/Button";
import "./Project.css";

const btnName = "See Live";

function Project({ useKey, Title, Src, Desc, link, code, type, teamMembers }) {
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
          {teamMembers.length?<span>Team Members : </span>:null}
          {teamMembers.length?teamMembers.map((member,i) => <a key={i} href={member.project} className="teamMember">{`--` + member.name + `--`}</a>):<></>
          }
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
      <section
        href={link}
        className="wrapper"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-delay="300"
        data-aos-easing="ease-in"
        data-aos-anchor-placement=".exp"
      >
      {type === "image"?<img id="portfolio-image" src={Src} alt="icon" style={{cursor:"pointer"}}/>  :
        <iframe width="560" height="315" src={Src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      }
      </section>
    </div>
  );
}

export default Project;
