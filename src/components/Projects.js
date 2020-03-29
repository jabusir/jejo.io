import React from "react";
import ProjectCard from "./ProjectCard";
import Particles from "react-particles-js";

import "../styles/projects.css";

export default class extends React.Component {
  state = {
    projects: [
      {
        name: "Brooks and Bridges Rentals",
        desc: [
          "E-commerce website for event planning",
          "In addition to working as a frontend engineer building the ecommerce client, I switched to a full stack role building a content resource manager for the frontend client",
          "Built with React, Redux, TypeScript, Node, Express, and MongoDB"
        ],
        images: [
          "./images/BnB/flow-1.png",
          "./images/BnB/flow-1.png",
          "./images/BnB/flow-3.png"
        ]
      },
      {
        name: "Jukebox.io",
        desc: [
          "A Spotify powered extension for Twitch.tv. Building community through music.",
          "Worked as a frontend engineer with a sole backend engineer to bring product to production with over a hundred installs in the first week",
          "Built with React, Redux, Node, Express, and MonogoDB"
        ],
        images: [
          "./images/frame-2.png",
          "./images/frame-2.1.png",
          "./images/frame-2.2.png",
          "./images/frame-2.3.png"
        ]
      },
      {
        name: "Unmapped.io",
        desc: [
          "Meeting and making friends in new places.",
          "Worked as a frontend engineer on a team of two, using GitHub for collaboration and project management in accordance with the Scrum Framework",
          "Built with React"
        ],
        images: [
          "./images/unmapped.png",
          "./images/interests.png",
          "./images/info.png"
        ]
      }
    ]
  };

  render() {
    return (
      <div className="projects-container">
        <div className="projects-header">Projects</div>
        <div className="cards-container">
          {this.state.projects.map(project => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              images={project.images}
            />
          ))}
        </div>
      </div>
    );
  }
}
