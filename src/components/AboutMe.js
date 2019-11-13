import React from 'react';
import Skills from './Skills';
import Particles from 'react-particles-js';

import '../styles/about-me.css'


const AboutMe = () => (
    <div className="box">
        <div className="about-me-container">
            <div className="about-me">
                <div className="about-me__header">Hi, I'm Jehad, but my dev team calls me Jejo</div>
                <div className="about-me__header">I'm a Software Engineer looking for new and exciting opportunites to perpetually refine my chunks</div>
            </div>
                <div className="container"><Skills /></div>
        </div>
        <div className="footer">Here are some projects I've worked on in the meantime...</div>
    </div>
);

export default AboutMe;