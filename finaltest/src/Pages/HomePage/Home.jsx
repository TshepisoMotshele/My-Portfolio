import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home">
          <div className="overlap-group">
            <img
              className="home-elements"
              alt="Home elements"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c26b19e3b538f3312a72f9/img/home-elements.png"
            />
            <div className="rectangle" />
            <NavLink to="/achievements" className="text-wrapper" activeClassName="active">Achievements</NavLink>
            <NavLink to="/contact" className="div" activeClassName="active">Contact</NavLink>
            <NavLink to="/portfolio" className="text-wrapper-2" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/" className="text-wrapper-3" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="text-wrapper-4" activeClassName="active">About</NavLink>
            {/* Add other NavLink components as necessary */}
            <img
              className="home-svgrepo-com"
              alt="Home svgrepo com"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f9e1260467af8aa0bfe0/img/home-1-svgrepo-com.svg"
            />
            <img
              className="about-information"
              alt="About information"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f9e1260467af8aa0bfe0/img/about-information-info-help-svgrepo-com.svg"
            />
            <img
              className="portfolio-svgrepo"
              alt="Portfolio svgrepo"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f9e1260467af8aa0bfe0/img/portfolio-svgrepo-com.svg"
            />
            <img
              className="education-svgrepo"
              alt="Education svgrepo"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c26b19e3b538f3312a72f9/img/education-svgrepo-com.svg"
            />
            <img
              className="location-place-pin"
              alt="Location place pin"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f9e1260467af8aa0bfe0/img/location-place-pin-svgrepo-com.svg"
            />
            <img
              className="element"
              alt="Element"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c2618037c6cf2659498171/img/147166387-1@2x.png"
            />
            <img
              className="img"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c26b19e3b538f3312a72f9/img/vector-1.svg"
            />
            <img
              className="vector-2"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/vector-4.svg"
            />
            <p className="p">2024 | Designed and Developed By Tshepiso Motshele. | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
