import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="home-wrapper">
        <div className="home">
          <div className="div">
            <div className="div">
              <div className="overlap-group">
                <div className="rectangle" />
                <NavLink to="/" className="text-wrapper">Home</NavLink>
                <NavLink to="/about" className="text-wrapper-5">About</NavLink>
                <NavLink to="/achievements" className="text-wrapper-2">Achievements</NavLink>
                <NavLink to="/portfolio" className="text-wrapper-3">Portfolio</NavLink>
                <NavLink to="/contact" className="text-wrapper-2">Contact</NavLink>
                {/* End of navigation links */}
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbed4119ad76e61e000164/img/vector-5.svg"
                />
                
                <img
                  className="home-svgrepo-com"
                  alt="Home svgrepo com"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/home-1-svgrepo-com.svg"
                />
                <img
                  className="about-information"
                  alt="About information"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/about-information-info-help-svgrepo-com.svg"
                />
                <img
                  className="portfolio-svgrepo"
                  alt="Portfolio svgrepo"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbed4119ad76e61e000164/img/portfolio-svgrepo-com.svg"
                />
                <img
                  className="education-svgrepo"
                  alt="Education svgrepo"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/education-svgrepo-com.svg"
                />
                <img
                  className="location-place-pin"
                  alt="Location place pin"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/location-place-pin-svgrepo-com.svg"
                />
                <img
                  className="img"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/vector-6.svg"
                />
              </div>
            </div>
            <img
              className="element"
              alt="Element"
              src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbed4119ad76e61e000164/img/147166387-1@2x.png"
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
          </div>
          <div className="contact-form">
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-6">Submit</div>
              </div>
            </button>
            <div className="message">
              <div className="overlap">
                <div className="text-wrapper-7">Message</div>
              </div>
            </div>
            <div className="subject">
              <div className="overlap-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-8">Subject</div>
              </div>
            </div>
            <div className="email">
              <div className="overlap-3">
                <div className="text-wrapper-9">Email</div>
              </div>
            </div>
            <div className="name">
              <div className="overlap-4">
                <div className="text-wrapper-10">Name</div>
              </div>
            </div>
          </div>
          <img
            className="leave-me-a-message"
            alt="Leave me a message"
            src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbed4119ad76e61e000164/img/leave-me-a-message.png"
          />
          <img
            className="vector-4"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65cbed4119ad76e61e000164/img/vector.svg"
          />
          <img
            className="vector-5"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/vector-1.svg"
          />
          <img
            className="vector-6"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/65c1f19fe83795b5da57d4a2/releases/65c1f95a886b7f388e40c1d9/img/vector-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;