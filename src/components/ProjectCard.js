import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ProjectCard extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div className="project-container">
          <img
            src={this.props.face}
            alt="card-face"
            height="400px"
            width="400px"
          />
          <div className="project-desc">
            <div className="project-desc__line">{this.props.desc[0]}</div>
            <div className="project-desc__line">{this.props.desc[1]}</div>
            <div className="project-desc__line">{this.props.desc[2]}</div>
          </div>
        </div>
      </a>
    );
  }
}
