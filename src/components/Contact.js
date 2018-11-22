import React from 'react';
import '../styles/contact.css';

const Contact = () => (
    <div className="contact">
        <div className="contact__header">contact</div>
        <div className="contact__text">Please feel free to contact me for any additional information, project inquiries, or just to have a chat!</div>
        <div className="icons">
            <img src="./images/linked.png" alt="LinkedIn" height={25} width={100}/>
            <i class="devicon-github-plain-wordmark"></i>
        </div>
    </div>
);

export default Contact;