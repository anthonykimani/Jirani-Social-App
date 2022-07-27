import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const Friends = ({ darkMode, isDarkMode }) => {
  return (
    <div className="friends-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="friends-section">
          <Menu isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Friends;
