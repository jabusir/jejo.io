import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-container">
        <img
          src={this.props.face}
          alt="card-face"
          height="400px"
          width="400px"
        />
        <div className="project-desc">{this.props.desc}</div>
      </div>
    );
  }
}
