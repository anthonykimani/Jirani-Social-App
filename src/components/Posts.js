import blackModel from "../images/close-up-model-wearing-make-up.jpg";
import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg";
import summer from "../images/summer-time-beach-night.jpg";
import blackLady from "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg";
import React,{useState,useEffect} from "react";

const Posts = ({ posts }) => {
    const [comments,setComments] = useState('');
    const [newComment,setNewComment] = useState('')
    const [liked,setLiked] = useState(false)

    const handleLike = ()=>{
        setLiked(!liked)
    }

    const handleAddcomment = (event)=>{
        console.log({[event.target.name]:event.target.value})
        setNewComment({[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setComments(newComment)
        console.log(comments)
        fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(comments)
        })
    }

  return (
    <div className="posts-container">
      <div className="post-header">
        <div className="post-header-profile">
          <img src={blackLady} alt="" />
          <div>
            <h4>{posts.name}</h4>
            <div>
              <p>{posts.location}</p>
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
          <i className={liked?"bx bxs-heart bx-sm":"bx bx-heart bx-sm"} onClick={handleLike} id={liked?"like":""}></i>
          <i className="bx bx-message-square-dots bx-sm"></i>
          <i className="bx bx-share-alt bx-sm"></i>
        </div>
        <div className="post-icons-right">
          <i className="bx bx-bookmark bx-sm"></i>
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
              <p>{element.comment}</p>
            ))}
          </div>
          <div className="post-add-comments">
            <form onSubmit={handleSubmit} >
              <input type="text" placeholder="Add comment" name="comment" onChange={handleAddcomment} />
              <input type="submit" value="Comment"  />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
