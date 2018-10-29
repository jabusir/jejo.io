import React from 'react';
import '../styles/projects.css';
import MyCarousel from './MyCarousel';

const Projects = () => (
    <div className="projects"> 
        <div className="projects__header">projects</div>
        <div className="carousel-container">
            <MyCarousel />
        </div>
    </div>
);

export default Projects; 