import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Friend from "../components/Friend";
import React,{useState,useEffect} from "react";
import Request from "../components/Request";

const Friends = ({ darkMode, isDarkMode }) => {
    const [friends,setFriends] = useState([])
    const [requests,setRequests]  = useState([])

    const handleRemoveFriend = (id)=>{
        fetch(`http://localhost:3000/friends/${id}`,{
            method:"DELETE",
        })
        .then((response)=>response.json())
        .then((data)=>{
            const deleted = friends.filter((element)=>(
                element.id !== id
            ))
            setFriends(deleted)
        })
    }

    const friendList = friends.map((element)=>(
        <Friend isDarkMode={isDarkMode} element={element} removeFriend={handleRemoveFriend} />
    ))

    const requestsList = requests.map((element)=>(
        <Request isDarkMode={isDarkMode} element={element}  />
    ))

    useEffect(()=>{
        fetch("http://localhost:3000/friends")
        .then((response)=>response.json())
        .then((data)=>setFriends(data))
    },[])

    useEffect(()=>{
        fetch("http://localhost:3000/requests")
        .then((response)=>response.json())
        .then((data)=>setRequests(data))
    },[])


  return (
    <div className="friends-container">
      <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
      <div className="friends-section">
          <Menu isDarkMode={isDarkMode} />
          <h2>Friend Requests</h2>
          {requestsList}
          <h2>Friends</h2>
          {friendList}
      </div>
    </div>
  );
};

export default Friends;
