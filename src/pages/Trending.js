import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import React, { useState, useEffect } from "react";

const Trending = ({ darkMode, isDarkMode }) => {
  const [trending, setTrending] = useState([]);

  const trends = trending.map((element, index) => (
    <div className="trends-container" style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)", color:"var(--)" }
          : { backgroundColor: "var(--bg-light-color" }
      }>
      <div className="trends-header">
        <img src="" alt="" />
        <div className="trends-header-text">
          <h4>{element.topic}</h4>
          <p>{element.name}</p>
        </div>
      </div>
      <div className="trends-body">
        <h3>{element.post}</h3>
      </div>
      <div className="trends-icons">
        <div className="trends-icons-left">
          <h5>{element.likes}</h5>
        </div>
        <div className="trends-icons-right">
          <h5>{element.commentNumber}</h5>
          <h5>{element.shares}</h5>
        </div>
      </div>
      <div className="trends-footer"></div>
      <div className="comment-bar">
        <form>
          <input type="text" />
          <input type="submit" value="comment" />
        </form>
      </div>
      <div className="comments">
        <h4>{element.comments.commenter}</h4>
        <p>{element.comments.comment}</p>
      </div>
    </div>
  ));

  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then((response) => response.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <div className="trending-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="trending-section">
        <Menu isDarkMode={isDarkMode} />
        {trends}
      </div>
    </div>
  );
};

export default Trending;
