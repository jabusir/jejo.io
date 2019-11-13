import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ProjectCard extends React.Component {
    render() {
        console.log(window.innerWidth)

        return (
            <div className="project-container">
                <div className="project-name">{this.props.name}</div>
                <div className="bottom">
                    <div className="carousel-container">
                        <Carousel showIndicators={false} showStatus={false}>
                            {this.props.images.map((image) => (
                                <div className="project-image-container">
                                    <img className="project-image" src={image} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="project-desc">{this.props.desc}</div>
               </div>
            </div>
        )
    }
}