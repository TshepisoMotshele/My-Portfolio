import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"

import  Home  from './Pages/HomePage/Home.jsx';
import About from './Pages/AboutPage/About.jsx'
import Portfolio from './Pages/PortfoliosPage/Portfolio.jsx';
import { Achievement } from './Pages/Achievements/Achievement';
import { Contact } from './Pages/ContactPage/Contact';




function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;