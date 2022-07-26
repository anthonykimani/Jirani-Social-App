import Navbar from "../components/Navbar";
import Interactions from "../components/Interactions";
import Timeline from "../components/Timeline";
import Menu from "../components/Menu";
import React,{useState} from 'react';

const Home = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);

    const handleMode = ()=>{
        setIsDarkMode(!isDarkMode);
    }
  return (
    <div>
      <Navbar darkMode={handleMode} isDarkMode={isDarkMode} />
      <div className="home-container">
        <Menu isDarkMode={isDarkMode} />
        <Timeline isDarkMode={isDarkMode}/>
        <Interactions isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default Home;
