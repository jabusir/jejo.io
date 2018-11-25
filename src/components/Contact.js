import React from 'react';
import '../styles/contact.css';

const Contact = () => (
    <div className="contact">
        <div className="contact__header">contact me</div>
        <div className="contact__text">Please feel free to reach out to me for any additional information, project inquiries, or just to grab a cup of coffee.</div>
        <div className="icons">
            <div className="icon linkedin"><img src="./images/linked.png"  alt="LinkedIn" height={25} width={100}/></div>
            <div className="icon github"><i class="devicon-github-plain-wordmark"></i></div>
            <div className="icon mail"><img src="./images/mail.png" alt="mail" height={50} width={50}/></div>
            <div className="icon download"><img src='./images/download.png' alt="download" height={50} width={50} /></div>
        </div>
    </div>
);

export default Contact;