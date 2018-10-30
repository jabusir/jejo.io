import React from 'react';
import '../styles/projects.css';
import MyCarousel from './MyCarousel';

const Projects = () => (
    <div>
        <div className="projects">
        <div className="subheader">Jukebox</div>
            <div className="jukebox-body">A spotify powered extension for Twitch.tv. Building community through music.</div>
                <MyCarousel />
                <div>
                </div>
        </div>
    </div>

);

export default Projects; 