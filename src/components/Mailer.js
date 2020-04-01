import React, { useState } from "react";
import "../styles/mailer.css";

const Mailer = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [mailSent, setMailSent] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        name,
        email,
        message
      }
    }).then(res => console.log(res));
  };

  return (
    <div className="mailer">
      <p>Contact Me</p>
      <div>
        <form action="/action_page.php">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Mailer;
