import React, { useState, useEffect } from "react";
import Text from "./Text";

const Texts = ({ isDarkMode }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("https://json-template-kim.herokuapp.com/messages")
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div
      className="texts-container"
      style={
        isDarkMode
          ? {
              backgroundColor: "var(--bg-dark-color)",
              color: "var(--bg-grey-color)",
            }
          : { backgroundColor: "var(--bg-light-color)" }
      }
    >
      <div className="texts-header">
        <h4>Messages</h4>
        <i className="bx bx-edit"></i>
      </div>
      <div className="search-messages-container">
        <i className="bx bx-search bx-fw"></i>
        <input type="text" placeholder="Search for messages , posts" />
      </div>
      <div className="message-section">
        <div className="message-type">
          <p>Primary</p>
          <p>General</p>
          <p>Requests</p>
        </div>
        {message.map((element) => (
          <Text message={element} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Texts;
