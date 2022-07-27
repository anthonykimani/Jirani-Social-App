const Friend = ({ isDarkMode,element }) => {
  return (
    <div>
      <div className="friend-header">
        <img src="" alt="" />
        <div className="friend-text">
          <h4>{element.name}</h4>
          <p>{element.mutuals} friends</p>
        </div>
        <div className="button-container">
          <button className="accept-button">Accept Friend</button>
          <button className="remove-button">Remove Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
