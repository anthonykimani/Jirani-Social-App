import blackModel from "../images/close-up-model-wearing-make-up.jpg";
import effielTower from "../images/close-up-picnic-near-eiffel-tower.jpg";
import summer from "../images/summer-time-beach-night.jpg";
import blackLady from "../images/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry.jpg";
// import React, { useState, useEffect } from "react";

const Stories = () => {
  //   const [stories, setStories] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/stories")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setStories(data);
  //       });
  //   }, []);
  // const mappedData = stories.map((element, index) => {
  //     console.log(element.image)
  //   return <img src={element.image} alt={element.alt} key={index} />;
  // })

  return (
    <div className="stories-container">
      <img src={blackLady} alt="" />
      <img src={blackModel} alt="" />
      <img src={effielTower} alt="" />
      <img src={summer} alt="" />
    </div>
  );
};

export default Stories;
