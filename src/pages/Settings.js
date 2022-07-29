import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Setting from "../components/Setting";

const Settings = ({ isDarkMode, darkMode, isOpen, handleOpenMenu }) => {
  return (
    <div className="settings-container">
      <Navbar
        darkMode={darkMode}
        isDarkMode={isDarkMode}
        handleOpenMenu={handleOpenMenu}
      />
      <div
        className="settings-section"
        style={
          isDarkMode
            ? {
                backgroundColor: "var(--bg-dark-color)",
                color: "var(--bg-light-color)",
              }
            : { backgroundColor: "var(--bg-light-color" }
        }
      >
        <Menu isDarkMode={isDarkMode} isOpen={isOpen} />
        <Setting isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Settings;
