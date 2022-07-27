import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Menu from "../components/Menu";

const Home = ({ isDarkMode, darkMode }) => {
  return (
    <div>
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="home-container">
        <Menu isDarkMode={isDarkMode} />
        <Timeline isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
