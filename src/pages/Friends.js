import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Friend from "../components/Friend";
import React, { useState, useEffect } from "react";
import Request from "../components/Request";

const Friends = ({ darkMode, isDarkMode, isOpen, handleOpenMenu }) => {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);

  const handleRemoveFriend = (id) => {
    fetch(`https://json-template-kim.herokuapp.com/friends/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const deleted = friends.filter((element) => element.id !== id);
        setFriends(deleted);
      });
  };

  const handleAcceptRequest = (id) => {
    fetch(`https://json-template-kim.herokuapp.com/requests/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const accepted = requests.filter((element) => element.id !== id);
        setRequests(accepted);
        const newFriends = requests.filter((element) => element.id === id);
        setFriends([...friends, ...newFriends]);
      });
  };

  const friendList = friends.map((element, index) => (
    <Friend
      isDarkMode={isDarkMode}
      element={element}
      removeFriend={handleRemoveFriend}
      key={index}
    />
  ));

  const requestsList = requests.map((element, index) => (
    <Request
      isDarkMode={isDarkMode}
      element={element}
      acceptRequest={handleAcceptRequest}
      key={index}
    />
  ));

  useEffect(() => {
    fetch("https://json-template-kim.herokuapp.com/friends")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);

  useEffect(() => {
    fetch("https://json-template-kim.herokuapp.com/requests")
      .then((response) => response.json())
      .then((data) => setRequests(data));
  }, []);

  return (
    <div className="friends-container">
      <Navbar
        darkMode={darkMode}
        isDarkMode={isDarkMode}
        handleOpenMenu={handleOpenMenu}
      />
      <div
        className="friends-section"
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
        <h2>Friend Requests</h2>
        {requestsList}
        <h2>Friends</h2>
        {friendList}
      </div>
    </div>
  );
};

export default Friends;
