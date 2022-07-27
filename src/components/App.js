import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../pages/Home";
import Messaging from "../pages/Messaging";
import React,{useState} from 'react';
import Friends from "../pages/Friends";
import Settings from "../pages/Settings";
import Trending from "../pages/Trending";

const App = ()=>{
  const [isDarkMode,setIsDarkMode] = useState(false);

  const handleMode = ()=>{
      setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} darkMode={handleMode} />} />
          <Route path="/messages" element={<Messaging isDarkMode={isDarkMode} darkMode={handleMode} />} />
          <Route path="/friends" element={<Friends isDarkMode={isDarkMode} darkMode={handleMode} />} />
          <Route path="/settings" element={<Settings isDarkMode={isDarkMode} darkMode={handleMode} />} />
          <Route path="/trending" element={<Trending isDarkMode={isDarkMode} darkMode={handleMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
