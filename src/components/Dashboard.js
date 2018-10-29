import React, { Component } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
//import Projects from './Projects';
import Contact from './Contact';
import '../styles/base.css';
import MyCarousel from './MyCarousel';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard">
            <AboutMe />
            <MyCarousel />
            <Contact />
        </div>
      </div>
    );
  }
}

export default Dashboard;
