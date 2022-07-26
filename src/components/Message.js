import profilePic from '../images/profile.jpg'


const Message = () => {
  return (
    <div className="message">
      <img src={profilePic} alt="" />
      <div className="message-text">
        <h4>Hello Kimani</h4>
        <p>Are you available for an interview?</p>
      </div>
      <div className="message-expand">
        <i class="bx bx-chevron-down"></i>
      </div>
    </div>
  );
};

export default Message;
