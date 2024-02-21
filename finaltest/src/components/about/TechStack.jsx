import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
} from "react-icons/si";





const TechStack = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getItemsPerRow = () => {
    if (width >= 1000) {
      return 4;
    } else
    if (width >= 799 && width <= 999) {
      return 3;
    } else {
      return 2;
    }
  };

  return (
    <div className="techstack">
      <h1 style={{ fontSize: "50px" }}>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3.5rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={getItemsPerRow()}>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiPython
            style={{ 
              width: "60%", 
              height: "auto", 
              backgroundImage: "linear-gradient(to bottom, blue, yellow)" 
            }}

            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Python</Card.Header>
    </Card.Content>
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiJava 
              style={{ width: "60%", height: "auto", color: "red" }}
              />
              <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Java</Card.Header>
    </Card.Content>
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiJavascript1
              style={{ width: "60%", height: "auto", color: "yellow" }}
              />
              <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>JavaScript</Card.Header>
    </Card.Content>
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiHtml5
              style={{ width: "60%", height: "auto", color: "#E34234" }}

            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>HTML</Card.Header>
    </Card.Content>
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiCss3
              style={{ width: "60%", height: "auto", color: " arctic blue" }}
              />
              <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>CSS</Card.Header>
    </Card.Content>
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiReact
              style={{ width: "60%", height: "auto", color: "skyblue" }}
              />
              <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>React</Card.Header>
    </Card.Content>
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiNodejs
              style={{ width: "60%", height: "auto", color: "green" }}
              />
              <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Node JS</Card.Header>
    </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};




export default TechStack; 
