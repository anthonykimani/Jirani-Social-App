import profilePic from '../images/profile.jpg'

const Text = ({message}) => {
  return (
    <div className="text">
      <img src={profilePic} alt="" />
      <div className="text-text">
        <h4>{message.name}</h4>
        <p>{message.message}</p>
      </div>
      <div className="message-expand">
        <i className="bx bx-chevron-down"></i>
      </div>
    </div>
  );
};

export default Text;
