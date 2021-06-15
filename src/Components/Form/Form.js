import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [isPending, setPending] = useState(false);

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      if (name && email && message) {
        setPending(true);
        const response = await fetch(`${secrets.REACT_APP_BACKEND_URL}/contact`, {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        const toJson = await response.json();
        if (toJson) {
          setMailSent(true);
          setPending(false);
        }
        else alert("Can't send Mail!");
      } else alert("Cannot send Empty field!");
    } catch (e) {
      alert("Can't connect to server right now!");
    }
  };

  return (
    <div className="form" id="contact">
      {mailSent ? (
        <div className="done">
          <p data-aos="fade-in" data-aos-once="true">
            <br /> Super Excited!!! <br />I will get in touch with you soon
          </p>
        </div>
      ) : (
        <div>
          <h1 className="head" data-aos="fade-in" data-aos-once="true">
            GET IN TOUCH
          </h1>
          <section
            className="container"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <form className="inputs" spellCheck="false" onSubmit={sendMail}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                onChange={(event) => setName(event.target.value)}
                className="field"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                required
                className="field"
              />
              <textarea
                placeholder="Enter your message"
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
              <button className="btn" type="submit">
                Send message
              </button>
              {
                (isPending)?<p className="sending">Sending...</p>:<p className="not-sending"></p>
              }
              <span>Tel: +918851015687</span>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default Form;
