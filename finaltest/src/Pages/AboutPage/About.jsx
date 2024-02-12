import Navigation from "../../Compponents/navigation.jsx"
import React from 'react';
import Header from "../../Compponents/Header.jsx";
import EducationComponent from "../../Compponents/Education.jsx"
import ExperienceComponent from "../../Compponents/Experience.jsx"
import ButtonComponent from "../../Compponents/Button.jsx"

const About = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <div className="container">
                <Header />
                <EducationComponent />
                <ExperienceComponent />
                <ButtonComponent />
            </div>
        </>
    );
}

export default About;
