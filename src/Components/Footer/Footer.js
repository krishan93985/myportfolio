import React from "react";
import linkedin from "./linkedin.jpg";
import githublink from "./githublink.jpg";
import codechef from "./codechef.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="foot">
        <span>
          <a
            className="profile"
            href="https://www.linkedin.com/in/krishan-gopal-1a05a7175"
          >
            <img src={linkedin} alt="icon" width="45px" height="45px" />
          </a>
          <a className="profile" href="https://github.com/krishan93985">
            <img src={githublink} alt="icon" width="45px" height="45px" />
          </a>
          <a href="https://www.codechef.com/users/krishan12345">
            <img
              src={codechef}
              alt="icon"
              width="75px"
              height="45px"
              className="codechef"
              style={{ padding: "20px" }}
            />
          </a>
        </span>
        <hr className="hr" />
        <p>Made With love by Krishan Gopal</p>
      </footer>
    </div>
  );
}

export default Footer;
