import React from 'react';

import '../styles/projects.css';
import ProjectCard from './ProjectCard';

export default class extends React.Component {
    state = {
        projects: [
            {
                name: 'Flipit',
                desc: [
                        'A decentralized marketplace built at the YCombinator 2019 hackathon.',
                        'Was a lead frontend engineer on a team of five to complete building a functioning MVP within 24 hours',
                        'Built with React, MetaMask, and dynamoDB'

                    ],
                images: ['./images/1-Homepage.png', './images/2-Product-Grid.png', './images/3-Product-Decision-1.png', './images/5-Autorizing.png', './images/6-Congrats.png']
            },
            {
                name: 'Jukebox.io',
                desc: [
                        'A Spotify powered extension for Twitch.tv. Building community through music.', 
                        'Worked as a frontend engineer with a sole backend engineer to bring product to final phase of review',
                        'Built with React, Redux, Node, Express, and MonogoDB'
                    ],
                images: ['./images/frame-2.png', './images/frame-2.1.png', './images/frame-2.2.png', './images/frame-2.3.png']
            },
            {
                name: 'Unmapped.io',
                desc: [
                        'Meeting and making friends in new places.',
                        'Worked as a frontend engineer on a team of two, using GitHub for collaboration and project management in accordance with the Scrum Framework',
                        'Built with React'
                    ],
                images: ['./images/unmapped.png', './images/interests.png', './images/info.png']
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
                <div className="projects-header">Projects</div>
                {
                    this.state.projects.map((project) => (
                        <ProjectCard name={project.name} desc={project.desc} images={project.images}/>
                    ))
                }
            </div>
        );
    }
}