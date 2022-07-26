import profilePic from "../images/profile.jpg";
import React,{useState,useEffect} from "react";

const CreatePost = ({addPost}) => {
    const [createPost,setCreatePost] = useState({
        "content":""
    })

    const handleGetInput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log({...createPost,[name]:value})
        setCreatePost({...createPost,[name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        addPost(createPost)
    }

  return (
    <div className="createpost-container">
      <img src={profilePic} alt="" />
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={handleGetInput} placeholder="Whats on your mind?" name="content" value={createPost.content} />
            <input type="submit" id="create-button" value="Post" />
        </form>
    </div>
  );
};

export default CreatePost;
