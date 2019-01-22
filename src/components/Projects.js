import React from 'react';
import '../styles/projects.css';
import Jukebox from './Jukebox';

const Projects = () => (
    <div>
        <div className="projects">
            <div className="project jukebox">
                <div className="subheader">Jukebox.io</div>
                <div className="project-body">A Spotify powered extension for Twitch.tv. Building community through music.</div>
                <Jukebox />
            </div>
            <div className="project unmapped">
                <div className="subheader">Unmapped.io</div>
                <div className="project-body">Meeting and making friends in new places</div>
                <a href="http://www.unmapped.co">
                    <img src="./images/unmapped.png" alt="unmapped" height={700} width={1300}/>
                </a>
            </div>
        </div>
    </div>

);

export default Projects; 