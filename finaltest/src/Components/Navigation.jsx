import React from 'react';
import './navigation.css'
import { NavLink, Routes, Route } from 'react-router-dom';
import  Home  from '../Pages/HomePage/Home.jsx';
import About from '../Pages/AboutPage/About.jsx'


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
        <div className="home-icon">
            
              <div className="roof">
                <div className="roof-edge"></div>
              </div>
              <div className="front"></div>
            
          </div>
        </li>
        <li>
          <div className="about-icon">
            <div className="head">
              <div className="eyes"></div>
              <div className="beard"></div>
            </div>
          </div>
        </li>
        <li>
          <div className="work-icon">
            <div className="paper"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </li>
        <li>
          <div className="mail-icon">
            <div className="mail-base">
              <div className="mail-top"></div>
            </div>
          </div>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </nav>
  );
}



export default Navigation;
