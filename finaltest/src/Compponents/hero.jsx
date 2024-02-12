import React from 'react';
import './Hero.css'; // You can create a CSS file for styling
import heroImage from './T.M.png'; // Import the image file

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Your Name</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="hero-image">
        {/* Use the imported image */}
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
