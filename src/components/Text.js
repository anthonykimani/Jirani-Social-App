// import profilePic from "public/images/profile.jpg";
import React, { useState } from "react";

const Text = ({ message,isDarkMode }) => {
  const [openMessage, setOpenMessage] = useState(false);

  const handleDisplay = () => {
    setOpenMessage(!openMessage);
  };
  return (
    <div className="text" onClick={handleDisplay} style={
      isDarkMode
        ? {
            backgroundColor: "var(--bg-dark-color)",
            color: "var(--bg-grey-color)",
          }
        : { backgroundColor: "var(--bg-light-color)" }
    } >
      <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
      <div
        className="text-text"
        style={
          openMessage
            ? {
                height: "60px",
                backgroundColor: "var(--bg-grey-color)",
                padding: "20px",
              }
            : { display: "block"}
        }
      >
        <h4>{message.name}</h4>
        <p>{message.message}</p>
      </div>
      <div className="message-expand">
        <i
          className={
            openMessage ? "bx bx-chevron-up bx-sm" : "bx bx-chevron-down bx-sm"
          }
        ></i>
      </div>
    </div>
  );
};

export default Text;
