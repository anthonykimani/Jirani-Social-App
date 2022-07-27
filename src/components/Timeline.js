import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Interactions from "../components/Interactions";
import React, { useState, useEffect } from "react";

const Timeline = ({ isDarkMode }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState([]);

  const addPost = (posted) => {
    console.log(posted);
    setNewPost([...newPost, posted]);
    fetch("http://localhost:3000/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posted),
    });
  };

  const posted = newPost.map((element, index) => (
    <div className="newPost">
      <h3>{element.content}</h3>
    </div>
  ));

  useEffect(() => {
    fetch("http://localhost:3000/addpost").then((response) => response.json());
  });

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const timelinePosts = posts.map((element, index) => (
    <Posts posts={element} key={index} isDarkMode={isDarkMode} />
  ));

  return (
    <div className="timeline-container">
      <div className="timeline-left">
        <CreatePost addPost={addPost} isDarkMode={isDarkMode} />
        {posted}
        {timelinePosts}
      </div>
      {/* <div className="timeline-right">
        <Interactions isDarkMode={isDarkMode}/>
      </div> */}
    </div>
  );
};

export default Timeline;
