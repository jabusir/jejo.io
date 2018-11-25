import React from 'react';
import '../styles/header.css';
import '../styles/projects.css';
import { Link } from 'react-scroll'


const Header = () => (
<div>
    <div className="empty-div"></div>
    <div className="header">
        <div className="image-container">
            <img src="./images/jejo.io.jpg" alt="jejo.io" height={40} width={150}/>
        </div>
        <div className="header__links">
            <Link to="about-me__header" spy smooth duration={700}>about me</Link>
            <Link to="footer" spy smooth duration={700}>projects</Link>
            <Link to="contact__header" spy smooth duration={700}>contact</Link>
        </div>
    </div>
</div>
);

export default Header;