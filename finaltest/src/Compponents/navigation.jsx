import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="navigation-bar">
            <div className="logo">
                <img src="/path/to/your/logo.png" alt="Logo" />
            </div>
            <div className="social-links">
                <a href="link_to_linkedin" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/linkedin_icon.png" alt="LinkedIn" />
                </a>
                <a href="link_to_github" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/github_icon.png" alt="Github" />
                </a>
                <a href="link_to_discord" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/discord_icon.png" alt="Discord" />
                </a>
            </div>
            <div className="menu">
                <Link to="/" className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>
                    <i className="fa fa-home"></i> Home
                </Link>
                <Link to="/About" className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>
                    <i className="fa fa-info-circle"></i> About
                </Link>
                <Link to="/Portfolio" className={activeTab === 'portfolio' ? 'active' : ''} onClick={() => handleTabClick('portfolio')}>
                    <i className="fa fa-briefcase"></i> Portfolio
                </Link>
                <Link to="/Achievements" className={activeTab === 'achievements' ? 'active' : ''} onClick={() => handleTabClick('achievements')}>
                    <i className="fa fa-trophy"></i> Achievements
                </Link>
                <Link to="/Contact" className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>
                    <i className="fa fa-envelope"></i> Contact
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
