import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Menu from "../components/Menu";

const Home = ({ isDarkMode, darkMode,isOpen,handleOpenMenu }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} handleOpenMenu={handleOpenMenu} />
        <Menu isDarkMode={isDarkMode} isOpen={isOpen} />
      <div className="home-container">
        <Timeline isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
