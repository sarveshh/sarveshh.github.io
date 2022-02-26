import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { MapContainer } from "./MapContainer";

const Contact = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${nameInputRef.current.value}, the email you entered was: ${emailInputRef.current.value}, and the message you entered was: ${messageInputRef.current.value}`
    );
  };

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <div className="info">
            <MapContainer />
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h3 className="title">Let's get in touch</h3>
            <div className="input-container">
              <input
                autoComplete="none"
                type="text"
                name="name"
                className="input"
                ref={nameInputRef}
              />
              <label>Full Name</label>
              <span>Full Name</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                autoComplete="off"
                name="email"
                className="input"
                ref={emailInputRef}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                autoComplete="off"
                className="input"
                ref={messageInputRef}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send Message" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
