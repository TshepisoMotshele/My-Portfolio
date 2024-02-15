import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"

import  Home  from './Pages/HomePage/Home.jsx';
//import About from './Pages/AboutPage/About.jsx'
//import Portfolio from './Pages/PortfoliosPage/Portfolio.jsx';
//import Achievement from './Pages/Achievements/Achievement.jsx';
//import { Contact } from './Pages/ContactPage/Contact';




function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          
          <Route path="/home" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;