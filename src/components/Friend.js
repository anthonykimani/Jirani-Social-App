import profilePic from '../images/profile.jpg'

const Friend = ({ isDarkMode,element }) => {
  return (
    <div className="friend-container">
      <div className="friend-header">
        <div className="friend-text">
        <img src={profilePic} alt="" />
          <h4>{element.name}</h4>
        </div>
          <p>{element.mutuals} mutual friends</p>
        <div className="button-container">
          <button className="toggle-friend-button">Remove Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
