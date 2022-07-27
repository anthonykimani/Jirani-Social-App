import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Friend from "../components/Friend";
import React,{useState,useEffect} from "react";

const Friends = ({ darkMode, isDarkMode }) => {
    const [friends,setFriends] = useState([])

    const friendList = friends.map((element)=>(
        <Friend isDarkMode={isDarkMode} element={element} />
    ))

    useEffect(()=>{
        fetch("http://localhost:3000/friends")
        .then((response)=>response.json())
        .then((data)=>setFriends(data))
    },[])

  return (
    <div className="friends-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="friends-section">
          <Menu isDarkMode={isDarkMode} />
          {friendList}
      </div>
    </div>
  );
};

export default Friends;
