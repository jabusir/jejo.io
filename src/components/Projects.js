import React from "react";
import ProjectCard from "./ProjectCard";

import "../styles/projects.css";

export default class Projects extends React.Component {
  state = {
    projects: [
      {
        name: "Brooks and Bridges Rentals",
        desc: [
          "E-commerce website for event planning",
          "Worked as a full stack engineer as part of a full Scrum team with three other engineers",
          "Built with React, Redux, TypeScript, Node, Express, and MongoDB"
        ],
        face: "./images/BnB/bnb-logo.png",
        images: [
          "./images/BnB/flow-1.png",
          "./images/BnB/flow-1.png",
          "./images/BnB/flow-3.png"
        ],
        link: "https://www.brooksandbridgesrentals.com"
      },
      {
        name: "Jukebox.io",
        desc: [
          "A Spotify powered extension for Twitch.tv",
          "Worked as a frontend engineer with a sole backend engineer to bring product to production",
          "Built with React, Redux, Node, Express, and MonogoDB"
        ],
        face: "./images/jukebox/juke-logo.png",
        images: [
          "./images/jukebox/frame-2.png",
          "./images/jukebox/frame-2.1.png",
          "./images/jukebox/frame-2.2.png",
          "./images/jukebox/frame-2.3.png"
        ],
        link: "https://dashboard.twitch.tv/extensions/y3tna7wp9i1q10haek0nlrxzlnkdn1-0.0.1"
      },
      {
        name: "Unmapped.io",
        desc: [
          "Meeting and making friends in new places.",
          "Worked as a frontend engineer on a team of two, using GitHub for collaboration and project management",
          "Built with React"
        ],
        face: "./images/unmapped-logo.png",
        images: [
          "./images/unmapped.png",
          "./images/interests.png",
          "./images/info.png"
        ],
        link: "https://unmapped.co/"
      }
    ]
  };

  render() {
    return (
      <div className="projects-container">
        <div className="projects-header">Featured Works</div>
        <div className="cards-container">
          {this.state.projects.map(project => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              images={project.images}
              face={project.face}
              link={project.link}
            />
          ))}
        </div>
      </div>
    );
  }
}
