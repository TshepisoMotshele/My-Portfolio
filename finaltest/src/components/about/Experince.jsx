import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "ABSA Younglings",
      jobtitle: "Junior fullstack Developer",
      startYear: "May 2023 ",
      endYear: "Oct 2023",
      links:
        "#",
    },
    {
      id: 2,
      company: "CapaCiTi",
      jobtitle: "Software Development Intern",
      startYear: "Sep 2022 ",
      endYear: " Apr 2023",
      links:
        "#",
    },
  
  ];

  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={expGreen} alt="expGreen" />
        </div>
        <div className="experience-description">
          <h1 className="experience-title">
            <span style={{ color: "#32CD30" }}>Work</span> Experience
          </h1>
          {experienceData.map((exp) => (
            <a href={exp.links} key={exp.id} className="experience-tag">
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
