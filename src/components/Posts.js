import blackModel from "../images/close-up-model-wearing-make-up.jpg";
import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg";
import summer from "../images/summer-time-beach-night.jpg";
import blackLady from "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg";
import React, { useState, useEffect } from "react";

const Posts = ({ posts, isDarkMode }) => {
  const [comments, setComments] = useState("");
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddcomment = (event) => {
    console.log({ [event.target.name]: event.target.value });
    setNewComment({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments(newComment);
    console.log(comments);
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comments),
    });
  };

  return (
    <div
      className="posts-container"
      style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)", color: "white" }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <div className="post-header">
        <div className="post-header-profile">
          <img src={blackLady} alt="" />
          <div>
            <h3>{posts.name}</h3>
            <div>
              <h4>{posts.location} ,</h4>
              <p>{posts.time}</p>
            </div>
          </div>
        </div>
        <div className="post-header-text">
          <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
        </div>
      </div>
      <div className="post-image">
        <img src={summer} alt="" />
      </div>
      <div className="post-icons">
        <div className="post-icons-left">
          <i
            className={liked ? "bx bxs-heart bx-md" : "bx bx-heart bx-md"}
            onClick={handleLike}
            id={liked ? "like" : ""}
          ></i>
          <i className="bx bx-message-square-dots bx-md"></i>
          <i className="bx bx-share-alt bx-md"></i>
        </div>
        <div className="post-icons-right">
          <i className="bx bx-bookmark bx-md"></i>
        </div>
      </div>
      <div className="post-icons-paragraph-text">
        <div className="post-icons-likes">
          <div className="post-likes-img">
            <img src={blackModel} alt="" />
            <img src={blackLady} alt="" />
            <img src={effielTower} alt="" />
          </div>
          <div className="post-likes-text">
            <p>{posts.likes} Likes</p>
          </div>
        </div>
        <div className="post-comments-container">
          <div className="post-comments">
            {posts.comments.map((element, index) => (
              <h3>{element.comment}</h3>
            ))}
          </div>
          <div className="post-add-comments">
            <form onSubmit={handleSubmit} style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)" }
          : { backgroundColor: "var(--bg-light-color" }
      }>
              <input
                type="text"
                className="comment"
                style={
                  isDarkMode
                    ? { backgroundColor: "var(--bg-dark-color)" }
                    : { backgroundColor: "var(--bg-light-color" }
                }
                placeholder="Add comment"
                name="comment"
                onChange={handleAddcomment}
              />
              <input type="submit" value="Comment" className="comment-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
