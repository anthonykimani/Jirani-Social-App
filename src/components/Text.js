// import profilePic from "public/images/profile.jpg";

const Text = ({message}) => {
  return (
    <div className="text">
      <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" />
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
