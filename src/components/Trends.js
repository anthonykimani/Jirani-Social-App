import React, { useState } from "react";

const Trends = ({ isDarkMode, element }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div
        className="trends-container"
        style={
          isDarkMode
            ? {
                backgroundColor: "var(--bg-dark-color)",
                color: "var(--bg-light-color)",
              }
            : { backgroundColor: "var(--bg-light-color" }
        }
      >
        <div className="trends-inner-container">
          <div className="trends-header">
            <div className="trends-profile-container">
              <img src={process.env.PUBLIC_URL + element.image} alt="" />
              <div className="trends-header-text">
                <h4>{element.topic}</h4>
                <p>{element.name}</p>
              </div>
            </div>
            <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
          </div>
          <div className="trends-body">
            <h2
              style={
                isDarkMode
                  ? {
                      backgroundColor: "var(--bg-grey-color)",
                      color: "var(--bg-dark-color)",
                    }
                  : { backgroundColor: "var(--bg-light-color" }
              }
            >
              "{element.post}"
            </h2>
          </div>
          <div className="trends-icons">
            <div className="trends-icons-left">
              <i
                className={liked ? "bx bxs-heart bx-md" : "bx bx-heart bx-md"}
                onClick={handleLike}
                id={liked ? "like" : ""}
              ></i>
              <h5>{element.likes} Likes</h5>
            </div>
            <div className="trends-icons-right">
              <h3>{element.commentNumber} <i className="bx bx-message-square-dots bx-sm bx-fw"></i></h3>
              <h3>{element.shares} <i className="bx bx-share-alt bx-sm bx-fw"></i></h3>
            </div>
          </div>
          <div className="trends-footer">
            <div className="comment-bar">
              {/* <form>
              <input
                type="text"
                placeholder="comment..."
                className="input-bar"
                style={
                  isDarkMode
                    ? {
                        backgroundColor: "var(--bg-grey-color)",
                        color: "var(--bg-dark-color)",
                      }
                    : { backgroundColor: "var(--bg-light-color" }
                }
              />
              <input
                type="submit"
                value="comment"
                id="submit-button"
                style={
                  isDarkMode
                    ? {
                        backgroundColor: "var(--bg-grey-color)",
                        color: "var(--bg-dark-color)",
                      }
                    : { backgroundColor: "var(--brand-color" }
                }
              />
            </form> */}
            </div>
            {/* <div className="comments">
            <h4>{element.comments.commenter}</h4>
            <p>{element.comments.comment}</p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
