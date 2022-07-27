import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Setting from "../components/Setting";

const Settings = ({ isDarkMode, darkMode }) => {
  return (
    <div className="settings-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="settings-section">
        <Menu isDarkMode={isDarkMode} />
        <Setting isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Settings;
