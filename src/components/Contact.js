import React from 'react';
import '../styles/contact.css';
import Mail from './Mail';

const Contact = () => (
    <div className="contact">
        <div className="contact__header">contact me</div>
        <div className="contact__text">Feel welcome to reach out to me for my resume, project inquiries, or just to grab a cup of coffee.</div>
        <div className="icons">
            <div className="icon linkedin">
                <a href="https://www.linkedin.com/in/jabusir" target="_blank" rel="noopener noreferrer">
                    <img src="./images/linked.png"  alt="LinkedIn" height={25} width={100}/>
                </a>  
            </div>
            <div className="icon github">
                <a href="https://github.com/jabusir" target="_blank" rel="noopener noreferrer">
                    <i className="devicon-github-plain-wordmark"></i>
                </a>
            </div>
            <div className="icon mail">
                <Mail />
            </div>
        </div>
    </div>
);

export default Contact;