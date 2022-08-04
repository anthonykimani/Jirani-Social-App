import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import React, { useState, useEffect } from "react";
import Trends from "../components/Trends";

const Trending = ({ darkMode, isDarkMode, isOpen, handleOpenMenu }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("https://json-template-kim.herokuapp.com/trending")
      .then((response) => response.json())
      .then((data) => setTrending(data));
  }, []);

  const trends = trending.map((element, index) => (
    <Trends isDarkMode={isDarkMode} element={element} />
  ));

  return (
    <div className="trending-container">
      <Navbar
        darkMode={darkMode}
        isDarkMode={isDarkMode}
        handleOpenMenu={handleOpenMenu}
      />
      <div className="trending-section">
        <Menu isDarkMode={isDarkMode} isOpen={isOpen} />
        {trends}
      </div>
    </div>
  );
};

export default Trending;
