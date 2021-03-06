import React from "react";
import MyParticle from "./MyParticle";

import "../styles/about-me.css";

const AboutMe = () => (
  <div className="box">
    <MyParticle />
    <div className="about-me-container">
      <div className="about-me">
        <div className="about-me__header">
          Hi, I'm Jehad, but my dev team calls me Jejo
        </div>
        <div className="about-me__header">
          I'm a Software Engineer looking for new and exciting opportunites to
          perpetually refine my chunks
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
