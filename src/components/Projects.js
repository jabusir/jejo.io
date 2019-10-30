import React from 'react';

import '../styles/projects.css';
import ProjectCard from './ProjectCard';

export default class extends React.Component {
    state = {
        projects: [
            {
                name: 'Jukebox.io',
                desc: 'A Spotify powered extension for Twitch.tv. Building community through music.',
                images: ['./images/voting.png', './images/authorize.png', './images/playlists.png']
            },
            {
                name: 'Unmapped.io',
                desc: 'Meeting and making friends in new places.',
                images: ['./images/unmapped.png', './images/interests.PNG', './images/info.PNG']
            },
            {
                name: 'Flipit',
                desc: 'A decentralized marketplace.',
                images: ['./images/2-Product-Grid.png']
            }
        ]
    }

    renderImages = (images) => {
        if (images.length > 1 ) {
            return (
                <div className="project-container project-container--multi">
                    {images.map((image) => (
                        <img className="project-image" src={`${image}`} alt="project" height={400} width={300}/>
                    ))}
                </div>            
            );
        }
        else {
            return (
                <div className="project-container project-container--single">
                    <img className="project-image" src={images[0]} alt="project"/>
                </div>
            );
        }
    }



    render() {
        return (
            <div className="projects-container">
                {
                    this.state.projects.map((project) => (
                        <ProjectCard name={project.name} desc={project.desc} images={project.images}/>
                    ))
                }
            </div>
        );
    }
}