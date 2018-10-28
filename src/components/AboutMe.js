import React from 'react';
import '../styles/about-me.css'

const AboutMe = () => (
    <div className="about-me">
        <div className="about-me__header">about me</div>
        <div className="about-me__body">
            <img src="sample.jpg" alt="patrick" height="300" width="300"/>
            <div className="about-me__text">this section is all about me</div>
        </div>
    </div>
);

export default AboutMe;