import React from 'react';
import '../styles/skills.css';


const Skills = () => (
    <div className="skills-container">
        <div className="skils-text">This is what I know:</div>
        <div className="skills-icons">
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-sass-original colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <img src="./images/logo.png" alt="Redux" height={100} width={100}/>
            <i class="devicon-git-plain-wordmark colored"></i>
        </div>
    </div>
);

export default Skills;