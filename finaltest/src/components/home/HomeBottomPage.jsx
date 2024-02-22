import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";


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
            I am reliable to work along and i am also good at{" "}
            <span style={{ color: "#32CD30" }}>Collaboratory</span> work.
          </p>
          <br />
          
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
