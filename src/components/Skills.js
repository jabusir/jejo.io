import React from 'react';
import '../styles/skills.css';


const Skills = () => (
    <div className="skills-container">
        <div className="skils-text">This is what I enjoy building with:</div>
        <div className="skills-icons">
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <img src="./images/logo.png" alt="Redux" height={100} width={100}/>
            <i className="devicon-git-plain-wordmark colored"></i>
        </div>
    </div>
);

export default Skills;