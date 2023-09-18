import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // Throw error message if the email is not valid or if the name or message is empty
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!name) {
      setErrorMessage(`Please enter name`);
      return;
    }
    if (!message) {
      setErrorMessage(`Please enter message`);
      return;
    }

    // Clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div>
      <p>Contact</p>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name" className="text-white">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-white">
              Message:
            </label>
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="text-center"> 
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
          </div>
        </form>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
