import React from 'react';
import '../styles/header.css';
import '../styles/projects.css';
import { Link } from 'react-scroll';


export default class Header extends React.Component {

    state = {
        willTransition: false
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= 1) {
                if (!this.state.willTransition) {
                    this.setState(() => ({willTransition: true}));
                }
            }
            if (window.scrollY <= 1) {
                if (this.state.willTransition) {
                    this.setState(() => ({willTransition: false}))
                }
            }
        })
    }

    render() {
        return (
            <div>
                <div className="empty-div"></div>
                <div className={this.state.willTransition ? "header header--transition" : "header"}>
                    <div className="image-container">
                        <img src="./images/jejo.io.jpg" alt="jejo.io" height={40} width={150}/>
                    </div>
                    <div className="header__links">
                        <Link to="about-me-container" spy smooth duration={700}>about me</Link>
                        <Link to="footer" spy smooth duration={700}>projects</Link>
                        <Link to="contact__header" spy smooth duration={700}>contact</Link>
                    </div>
                </div>
            </div>
        );
    }
}


