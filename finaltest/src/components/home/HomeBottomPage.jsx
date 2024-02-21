import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiLinktree } from "react-icons/si";
import { Button } from "@mui/material";

const resumeURL ="TshepisoPDF";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom">
      <h1
        style={{ fontSize: "2.6rem", marginBottom: "1rem", marginTop: "-9rem" }}
        className="homeBottom-title"
      >
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Tshepiso Motshele, a young professional
            good at <span style={{ color: "#32CD30" }}>problem solving </span>
            skills & passionate about Full-stack development.
          </p>
          <br />
          <p>
            I love working as a{" "}
            <span style={{ color: "#32CD30" }}>Full Stack Developer</span> and
            My tech stack includes HTML, CSS,NodeJS, ReactJS, JavaScript, Python, Java. I am
            also familar with SQL .
          </p>
          <br />
          <p>
            I am proficient in JavaScript, Python and love{" "}
            <span style={{ color: "#32CD30" }}>solving problems</span> involving
            ?????????.
          </p>
          <br />
          <p>
            I'm also an active participant in various{" "}
            <span style={{ color: "#32CD30" }}>open source programs </span> such
            as{" "}
            <span style={{ color: "#32CD30" }}>
              GSSOC, SSOC, and Hacktoberfest{" "}
            </span>
            I contributed 9 successful pull requests to different projects
            during recent{" "}
            <span style={{ color: "#32CD30" }}>Hacktoberfest programe</span> and
            earned rewards and Swags.
          </p>
          <br />
          <p>
            I love making side projects and learn about new{" "}
            <span style={{ color: "#32CD30" }}>technologies</span>.
          </p>
          <br />
          
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      <div className="downloadPdf">
        <a href={resumeURL} target="_blank" rel="noreferrer">
         
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
