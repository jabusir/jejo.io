import React from 'react';
import '../styles/contact.css';
import Mail from './Mail';

const Contact = () => (
    <div className="contact">
        <div className="contact__header">contact me</div>
        <div className="contact__text">Please feel free to reach out to me for any additional information, project inquiries, or just to grab a cup of coffee.</div>
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
            <div className="icon download">
                <a href="./resume/JehadAbusir.pdf" download="JehadAbusir.pdf">
                    <img src='./images/download.png' alt="download" height={50} width={50} />
                </a>
            </div>
        </div>
    </div>
);

export default Contact;