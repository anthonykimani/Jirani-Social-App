import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import React, { useState, useEffect } from "react";

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const timelinePosts = posts.map((element, index) => (
    <Posts posts={element} key={index} />
  ));

  return (
    <div className="timeline-container">
      <Stories />
      <CreatePost />
      {timelinePosts}
    </div>
  );
};

export default Timeline;
