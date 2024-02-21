import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  SiVisualstudiocode,
  SiVercel,
  SiGit,
  SiFigma,
  SiCanva,
  SiFirebase,
  SiIntellijidea,
  SiPycharm,
} from "react-icons/si";


const Tools = () => {
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
  
   } else {
     return 3;
   }
 };

  return (
    <div className="techstack">
      <h1 style={{ fontSize: "50px" }}>
        Tools i{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3.5rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          use
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
            <SiVisualstudiocode
              style={{ width: "60%", height: "auto", color: "#007ACC" }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>VS Code</Card.Header>
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
            <SiIntellijidea
              style={{ width: "60%", height: "auto", color: "#FF6C37" }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>IntelliJ</Card.Header>
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
            <SiGit style={{ width: "60%", height: "auto", color: "#FF6C37" }} />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Git</Card.Header>
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
            <SiFigma
              style={{ width: "60%", height: "auto", color: "#d4acc4  " }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Figma</Card.Header>
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
            <SiCanva
              style={{ width: "60%", height: "auto", color: "#00C4CC    " }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Canva</Card.Header>
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
            <SiPycharm
              style={{ width: "60%", height: "auto", color: "#36c5f0 " }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>PyCharm</Card.Header>
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
            <SiFirebase
              style={{ width: "60%", height: "auto", color: "#FFA611 " }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Firebase</Card.Header>
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
            <SiVercel
              style={{ width: "60%", height: "auto", color: "#000000 " }}
            />
            <Card.Content style={{ textAlign: 'center', paddingBottom: '10px' }}>
      <Card.Header style={{ color: 'white', fontSize: '24px' }}>Vercel</Card.Header>
    </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default Tools;
