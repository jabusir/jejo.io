import React from 'react';
import Skills from './Skills';
import Particles from 'react-particles-js';

import '../styles/about-me.css'

const particleOpt = {
    "particles": {
        "number": {
            "value": 375,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.5
        },
        "move": {
            "direction": "right",
            "speed": 1.5
        },
        "size": {
            "value": 3
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0.05
            }
        },
    },
    "retina_detect": true
}

const AboutMe = () => (
    <div>
        <div className="about-me-container">
            <div className="about-me">
                <Particles className="particles" params={particleOpt}/>
                <div className="about-me__header">Hi, I'm Jehad, but my dev team calls me Jejo</div>
                <div className="about-me__header">I'm a Software Engineer looking for new and exciting opportunites to perpetually refine my chunks</div>
            </div>
                <div className="container"><Skills /></div>
        </div>
        <div className="footer">Here are some projects I've worked on in the meantime...</div>
    </div>
);

export default AboutMe;