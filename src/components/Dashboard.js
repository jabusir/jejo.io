import React, { Component } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

import '../styles/base.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard">
            <AboutMe />
            <Projects />
            <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
