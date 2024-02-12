import React from 'react';
import './Styles/about.css';

const Header = () => {
    return (
      <div className="index">
        <div className="div">
          <p className="hello">
            <span className="text-wrapper">He</span>
            <span className="span">llo</span>
            <span className="text-wrapper">,</span>
          </p>
          <p className="i-m-tshepiso">
            <span className="span">I’</span>
            <span className="text-wrapper">m</span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="span">T</span>
            <span className="text-wrapper">shepiso.</span>
          </p>
          <p className="i-m-passionate-about">
            I&#39;m passionate about creating and developing clean, unique, elegant products. I specialize in building
            Websites for small to medium size business. I keep my code clean, readable, modular and well refactored. I
            enjoy working with complex user interfaces
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;