import React from 'react';
import '../styles/projects.css';
import MyCarousel from './MyCarousel';

const Projects = () => (
    <div>
        <div className="projects">
            <div className="project jukebox">
                <div className="subheader">Jukebox.io</div>
                <div className="project-body">A Spotify powered extension for Twitch.tv. Building community through music.</div>
                <MyCarousel />
            </div>
            <div className="project unmapped">
                <div className="subheader">Unmapped.io</div>
                <div className="project-body">Meeting and making friends in new places</div>
                <img src="./images/unmapped.png" alt="unmapped" height={500} width={600}/>
            </div>
        </div>
    </div>

);

export default Projects; 