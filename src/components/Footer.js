import React from 'react';

import '../styles/footer.css'

//mail icon with href 
// <a href="https://mail.google.com/mail/u/0/?fs=1&view=cm&shva=1&su&to=jaabusir@ucdavis.edu&tf=1">
// <img className="mail-icon" src="./images/mail.png" alt="mail" height={50} width={50}/>
// </a>

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="icons-container">
                <div className="icon linkedin">
                    <a target="_blank" href="https://www.linkedin.com/in/jabusir">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="icon github">
                    <a  target="_blank" href="https://github.com/jabusir">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div className="icon mail">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&view=cm&shva=1&su&to=jaabusir@ucdavis.edu&tf=1">
                        <i class="fas fa-envelope-square"></i>
                    </a>
                </div>
                <div className="icon instagram">
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer