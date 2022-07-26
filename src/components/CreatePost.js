import profilePic from "../images/profile.jpg";

const CreatePost = () => {
  return (
    <div className="createpost-container">
      <img src={profilePic} alt="" />
      <input type="text" placeholder="Whats on your mind? " />
      <button className="create-button">Post</button>
    </div>
  );
};

export default CreatePost;
