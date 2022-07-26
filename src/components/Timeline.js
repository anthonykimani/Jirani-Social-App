import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import React, { useState, useEffect } from "react";

const Timeline = () => {
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
      <CreatePost addPost={addPost} />
      {posted}
      {timelinePosts}
    </div>
  );
};

export default Timeline;
