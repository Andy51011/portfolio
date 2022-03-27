import React, { useState } from "react";
import "./Contact.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f0b722c0-ad9c-11ec-b83f-8f17e10d6288";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const anotherMsg = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 100);
  }

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon!</div>
        <button onClick={anotherMsg}>Send another message!</button>
      </>
    );
  } else {
    return (
      <>
      <h1>Contact</h1>
      <div className="form-container">
        <form
          className="form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div>
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea placeholder="Your message" name="message" required />
          </div>
          <div>
            <button type="submit"> Send a message </button>
          </div>
        </form>
      </div>
    </>   
    )
  }
};

export default Contact;
