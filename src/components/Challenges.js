import React from "react";
import PhotoGallery2 from "./PhotoGallery2";

/* export const competitions = {
  comp1: "MonoVisions Photography Awards",
  comp2: "Grand Press Photo",
  comp3: "Fine Art Photography Awards",
  comp4: "Sony World Photograpy Awards",
}; */

const colorFont = {
  color: "#4782c1",
  margin: "70px 30px 70px 30px",
  textAlign: "center",
};

const Challenges = () => {
  return (
    <div className="container ">
      <h2 style={colorFont}> Wyróżnienia w konkursach fotograficznych</h2>
      <PhotoGallery2 />
    </div>
  );
};
export default Challenges;
