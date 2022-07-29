import React, { useState, useEffect } from "react";

const Setting = ({isDarkMode}) => {
  const [setting, setSetting] = useState([]);

  const settingData = setting.map((element) => (
    <div className="setting">
      <h4>{element.title}</h4>
      <p>{element.name}</p>
      <button>{element.button}</button>
    </div>
  ));

  useEffect(() => {
    fetch("https://json-template-kim.herokuapp.com/settings")
      .then((response) => response.json())
      .then((data) => setSetting(data));
  }, []);

  return (
    <div className="setting-container" style={
      isDarkMode
        ? {
            backgroundColor: "var(--bg-dark-color)",
            color: "var(--bg-light-color)",
          }
        : { backgroundColor: "var(--bg-light-color" }
    } >
      <h2>General Account Settings</h2>
      {settingData}
    </div>
  );
};

export default Setting;
