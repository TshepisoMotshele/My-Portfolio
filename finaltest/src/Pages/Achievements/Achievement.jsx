import React from "react";
import { NavLink } from "react-router-dom";

import "./Achievements.css";

export const Achievement = () => {
  return (
    <div className="achievement">
      <div className="home-wrapper">
        <div className="home">
          <div className="overlap-9">
            <div className="nav-bar">
              <div className="overlap-group-9">
                <div className="rectangle-10" />
                <NavLink to="/" className="text-wrapper-23" activeClassName="active">Home</NavLink>
                <NavLink to="/about" className="text-wrapper-24" activeClassName="active">About</NavLink>
                <NavLink to="/achievement" className="text-wrapper-20" activeClassName="active">Achievement</NavLink>
                <NavLink to="/contact" className="text-wrapper-21" activeClassName="active">Contact</NavLink>
                <NavLink to="/portfolio" className="text-wrapper-22" activeClassName="active">Portfolio</NavLink>
                
                <img
                  className="home-svgrepo-com"
                  alt="Home svgrepo com"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd681bc2ac91615baa1b2/img/home-1-svgrepo-com.svg"
                />
                <img
                  className="about-information"
                  alt="About information"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd681bc2ac91615baa1b2/img/about-information-info-help-svgrepo-com.svg"
                />
                <img
                  className="portfolio-svgrepo"
                  alt="Portfolio svgrepo"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd681bc2ac91615baa1b2/img/portfolio-svgrepo-com.svg"
                />
                <img
                  className="education-svgrepo"
                  alt="Education svgrepo"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd681bc2ac91615baa1b2/img/education-svgrepo-com.svg"
                />
                <img
                  className="location-place-pin"
                  alt="Location place pin"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd681bc2ac91615baa1b2/img/location-place-pin-svgrepo-com.svg"
                />
                <img
                  className="vector-2"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbd40a1e494c73352c49f5/img/vector-1.svg"
                />
                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/vector-4.svg"
                />
                <p className="text-wrapper-25">
                  2024 | Designed and Developed By Tshepiso Motshele. | All rights reserved.
                </p>
              </div>
            </div>
            <img
              className="element"
              alt="Element"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c2618037c6cf2659498171/img/147166387-1@2x.png"
            />
            <div className="rectangle-11" />
              <div className="node-JS-instance" />
              <div className="java-instance" />
            <div className="text-wrapper-26">My Wall Of Achievements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
