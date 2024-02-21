import React ,{useEffect ,useState} from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import T from "../../assets/T.png";
import Experience from "./Experince";
import Tools from "./Tools";
import "../about/About.css"

const AboutInfo = () => {
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

  const getRowLength = () => {
    return width >= 1000 ? 16 : 14;
  };

  const getFontLength = () => {
    if (width >= 1000) {
      return 16;
    } else if (width > 800 && width < 1000) {
      return 14;
    } else {
      return 12;
    }
  };

  return (
    <div className="about">
      <h1 className="about-heading">
        <span style={{ color: "#32CD30" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Tshepiso Motshele
            </span>{" "}
            from Cape Town, South Africa. And I started my career in an apprenticeship
            Full-Stack Developer at{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              CapaCiTi (UVU Africa)
            </span>{" "}
            and currently I'm am working for{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              ABSA Younglings
            </span>{" "}
            as a{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Junior Full-Stack Developer.
            </span>
          </p>
          <br />
        </div>
        <img
          className="rounded about-image"
          src={T}
          alt="Extra large avatar"
        />
      </div>

      <Experience />
      <TechStack />
      <Tools />
    </div>
  );
};

export default AboutInfo;
