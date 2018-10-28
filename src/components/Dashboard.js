import React, { Component } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

class Dashboard extends Component {
  render() {
    return (
     <div>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
     </div>
    );
  }
}

export default Dashboard;
